module.exports = {
  siteMetadata: {
    title: `AB Soluciones Empresariales`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId:'mo8biwfm5xrc',
        accessToken:'BU4y-ZuAeMZ4blaOhaFRjxSIzv0-mYYwujfNIhXGxfY'
      }
    },
    `gatsby-plugin-favicon`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    'gatsby-plugin-sass',
    `gatsby-plugin-favicon`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `media`,
        path: `${__dirname}/src/media/`,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
      },
    },
    `gatsby-transformer-sharp`,
    /* {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `GitHub`,
        fieldName: `github`,
        url: `https://api.github.com/graphql`,
        headers: {
          Authorization: `Bearer your-github-token`,
        },
      },
    }, */
    /* {
      resolve: `gatsby-source-mysql`,
      options: {
        connectionDetails: {
          host: '156.67.222.43',
          user: 'u447768267_root',
          password: 'l*6Ex!3h',
          database: 'u447768267_uniline'
        },
        queries: [
          {
            statement: 'SELECT idcurso,nombre,imagen,costo FROM curso',
            idFieldName: 'idcurso',
            name: 'cursos'
          }
        ]
      }
    } */
    // ... other plugins
  ]
}
