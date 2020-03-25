import React from "react"
import AcordeonSecciones from '../components/acordeonsecciones'
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"


const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query  { allContentfulBlog(sort: {fields: fecha, order: DESC}) {
        edges {
          node {
            imagen {
              title
              file {
                url
              }
            }
            fecha  (formatString: "YYYY MMMM,D", locale: "es")
            seccion
            autor
            titulo
            slug
            descripcion{
                descripcion
            }
          }
        }
      }
    }   
    `)

    return (
        <Layout>
            <Head title="Blog" />
            <div className="row d-block d-lg-flex">
                <div className="col-lg-9">
                    <div className="row d-block d-flex">
                        {data.allContentfulBlog.edges.map((edge) => {

                            return (

                                <div className="card col-12 col-lg-12">
                                    <div className="card-body">
                                        <div className="row  d-block d-lg-flex text-justify">
                                            <div className="text-center col-lg-5">
                                                <img alt="foto" className="img-fluid" src={edge.node.imagen.file.url} />
                                            </div>
                                            <div className="col-lg-7">
                                                <div className="text-center text-lg-left">
                                                    <h3><Link className="text-decoration-none" to={'/blog/' + edge.node.slug}>{edge.node.titulo}</Link></h3>
                                                </div>
                                                <p className="font-weight-bold">{edge.node.fecha + ' - ' + edge.node.seccion + ' ' + edge.node.autor}</p>
                                                <p>{edge.node.descripcion.descripcion}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <AcordeonSecciones />
            </div>
        </Layout>
    )
}

export default BlogPage;