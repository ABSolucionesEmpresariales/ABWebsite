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
    {
      resolve: `gatsby-source-mysql`,
      options: {
        connectionDetails: {
          host: 'srv286.main-hosting.eu',
          user: 'u981877364_cool',
          password: 'Eh]XWg0F',
          database: 'u981877364_uniline'
        },
        queries: [
          {
            statement: 'SELECT idcurso,nombre,imagen,costo FROM curso',
            idFieldName: 'idcurso',
            name: 'cursos'
          }
        ]
      }
    }
    // ... other plugins
  ]
}
