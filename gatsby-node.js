/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')
module.exports.createPages = async ({graphql,actions}) => {
    const {createPage} = actions
    const calendarioTemplate = path.resolve('./src/templates/calendario_cursos.js')
    const blogTemplate = path.resolve('./src/templates/blog.js')
    const serviciosTemplate = path.resolve('./src/templates/servicios.js')
    const categoriasTemplate = path.resolve('./src/templates/categorias.js')
    const res = await graphql(`
    query{
        allContentfulCalendario{
          edges{
            node{
              slug
            }
          }
        }
        allContentfulBlog {
          edges {
            node {
              slug
            }
          }
        }
        allContentfulServicio {
          edges {
            node {
              slug
            }
          }
        }
        allContentfulCategorias {
          edges {
            node {
              slug
            }
          }
        }
      }
    `)
  res.data.allContentfulCalendario.edges.forEach((edge) => {
    createPage({
      component: calendarioTemplate,
      path: `/calendario_cursos/${edge.node.slug}`,
      context: {
        slug: edge.node.slug
      }
    })
  })

  res.data.allContentfulBlog.edges.forEach((edge) => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug
      }
    })
  })

  res.data.allContentfulServicio.edges.forEach((edge) => {
    createPage({
      component: serviciosTemplate,
      path: `/servicios/${edge.node.slug}`,
      context: {
        slug: edge.node.slug
      }
    })
  })


res.data.allContentfulCategorias.edges.forEach((edge) => {
  createPage({
      component: categoriasTemplate,
      path:  `/categorias/${edge.node.slug}`,
      context: {
          slug: edge.node.slug
      }
  })
})

}