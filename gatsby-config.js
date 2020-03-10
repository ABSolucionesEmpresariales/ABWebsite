module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    'gatsby-plugin-sass',
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
            statement: 'SELECT * FROM curso',
            idFieldName: 'idcurso',
            name: 'cursos'
          }
        ]
      }
    }
    // ... other plugins
  ]
}
