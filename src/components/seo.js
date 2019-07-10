/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )


  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      script={
        `https://cdn.polyfill.io/v2/polyfill.min.js?features=Intl.~locale.en,Promise`,
        `https://maps.googleapis.com/maps/api/js?key=MY_GOOGLE_MAPS_API" type="text/javascript`,
        `https://hove.eu-west-2.bidjs.com/static/2.0/js/bid-dependencies.min.js`,
        `https://hove.eu-west-2.bidjs.com/static/2.0/prettyphoto/jquery.prettyPhoto.min.js`,
        `https://hove.eu-west-2.bidjs.com/static/2.0/js/hbs-bid.min.js`,
        `https://hove.eu-west-2.bidjs.com/static/2.0/js/bid.min.js`,
        window.bidjs = {  
          config: {    
            apiBase: "https://hove.eu-west-2.bidjs.com/auction-007/api",
            clientId: "/demonstration",
            staticBase: "https://hove.eu-west-2.bidjs.com/static/2.0",
            staticCDN: 'https://static.bidjs.com', // Do not change    
            staticVersion: '1.5', // e.g. 1.3  
            templateVariant: 'bootstrap3' // either 'bootstrap3' or 'bootstrap4'  
           },  
          modules: {    
            auctionDetails: '#!/auctionDetails/%AUCTION_ID%',
            auctionsArchived: true,
            invoices: true,
            lotDetails: '#!/itemDetails/%ITEM_ID%',
            mySales: true
            },  
          options: {
            allowTitleChange: true,
            allowMetaDescriptionChange: true,
            standalone: false,
            unsupportedBrowserMessage: 'Your browser is not supported. Please use a browser such as Google Chrome or Microsoft Edge to ensure full functionality'
          }
        }
      }
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
