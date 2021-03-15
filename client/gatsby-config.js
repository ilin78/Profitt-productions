
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/*`] },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-CK4BZCS4XL",
      },
    },
    `gatsby-plugin-scss-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-scss-typescript`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    // `gatsby-plugin-offline`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `G-CK4BZCS4XL`,
    //   },
    // },
  ],
}
