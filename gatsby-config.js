require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Online Property Auctions Scotland`,
        short_name: `OPAS`,
        start_url: `/`,
        background_color: `#3f4ea1`,
        theme_color: `#3f4ea1`,
        display: `minimal-ui`,
        icon: `src/images/opas-icon.png`,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-bidjs`,
      options: {
        auctionId: '277',  // Required
        bdxapi_name: `${process.env.BIDJS_KEY}`, // Required
        clientId: '302', // Required
        sorting: 'category', // Only value currently supported is 'category'
        includeImages: true, // Optional
      },
    },
    {
      resolve: 'gatsby-source-prismic-graphql',
      options: {
        repositoryName: 'juniper-test',
        path: '/preview', // optional, default: /preview
        previews: true, // optional, default: false
        pages: [{               // (optional)
          type: 'Content_page', // TypeName from prismic
          match: '/:uid',       // Pages will be generated under this pattern
          path: '/',            // Placeholder page for unpublished documents
          component: require.resolve('./src/templates/Landing.jsx'),
        }],
        sharpKeys: [
          /image|photo|picture/, // (default)
          'profilepic',
        ],
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Roboto`, 
            variants: [`700`, `900`]
          },
          {
            family: `Source+Sans+Pro`, 
            variants: [`400`, `700`]
          }
        ],
      },
    }
  ],
}
