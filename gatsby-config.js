module.exports = {
  siteMetadata: {
    title: `Bidlogix Test`,
    description: `A Bootstrap and Gatsby test site for Bidlogix made by the team at Juniper Studios `,
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
        name: `Bidlogix by Juniper`,
        short_name: `Bidlogix`,
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
        repositoryName: 'testeeee',
        path: '/preview', // optional, default: /preview
        previews: true, // optional, default: false
        pages: [{               // (optional)
          type: 'Landing_page', // TypeName from prismic
          match: '/article/:uid',       // Pages will be generated under this pattern
          path: '/article',            // Placeholder page for unpublished documents
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
