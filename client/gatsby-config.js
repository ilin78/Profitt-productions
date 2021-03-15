module.exports = {
  // siteMetadata: {
  //   title: "My Gatsby Site",
  // },
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
    "gatsby-plugin-sass",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-CK4BZCS4XL",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",

    "gatsby-transformer-remark",  
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
};


// "gatsby-plugin-mdx",
// {
//   resolve: "gatsby-source-contentful",
//   options: {
//     accessToken: "",
//     spaceId: "",
//   },
// },
// {
//   resolve: "gatsby-plugin-manifest",
//   options: {
//     icon: "src/images/icon.png",
//   },
// },
// {
//   resolve: "gatsby-source-filesystem",
//   options: {
//     name: "images",
//     path: "./src/images/",
//   },
//   __key: "images",
// },
