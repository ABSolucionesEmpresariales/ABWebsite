module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
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
    `gatsby-transformer-sharp`
  ]
}
