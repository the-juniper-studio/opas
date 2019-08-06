module.exports = {
  siteMetadata: {
    title: `Scottish Property Auctions`,
    description: `Scottish Property Auctions – Buy and Sell you property with us. Free property valuations.`,
    author: `@studiojuniper`,
  },
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
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Scottish Property Auctions`,
        short_name: `SPA`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-offline`, 
    {
      resolve: 'gatsby-source-prismic-graphql',
      options: {
        repositoryName: 'juniper-test',
        path: '/preview', // optional, default: /preview
        previews: true, // optional, default: false
        pages: [{               // (optional)
          type: 'Legal_page', // TypeName from prismic
          match: '/:uid',       // Pages will be generated under this pattern
          path: '/',            // Placeholder page for unpublished documents
          component: require.resolve('./src/templates/Landing.jsx'),
        }],
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Open+Sans`, 
            variants: [`400`, `700`]
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
