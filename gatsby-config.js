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
        auctionId: `${process.env.BIDJS_AUCTION_ID}`,  // Required ${process.env.AUCTION_ID}
        bdxapi_name: `${process.env.BIDJS_KEY}`, // Required ${process.env.BIDJS_KEY}
        clientId: `${process.env.BIDJS_CLIENT_ID}`, // Required ${process.env.BIDJS_CLIENT_ID}
        sorting: 'category', // Only value currently supported is 'category'
        includeImages: true, // Optional
      },
    },
    {
      resolve: 'gatsby-source-prismic-graphql',
      options: {
        repositoryName: 'opas',
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
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-N7QPPV3",
        includeInDevelopment: true, // Defaults to false meaning GTM will only be loaded in production.
        defaultDataLayer: { platform: "gatsby" }
      },
    }
  ],
}
