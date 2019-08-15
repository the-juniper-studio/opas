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
    {
      resolve: `gatsby-source-bidjs`,
      options: {
        clientId: '302',
        includeImages: true,
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
