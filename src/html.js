import React from "react"
import PropTypes from "prop-types"

function scripting() {
  return {__html: `
    <script defer>
      window.bidjs = {  
        config: {    
          apiBase: "https://hove.eu-west-2.bidjs.com/auction-007/api",
          clientId: "/onlinepropertyauctions",
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
    </script>
  `};
}


export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="preconnect" href="https://opas.prismic.io" />
        <script defer src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.9.1/underscore-min.js" />
        <script defer src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossOrigin="anonymous" />
        <script defer src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js" integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd" crossOrigin="anonymous" />
        <script defer src="https://cdn.polyfill.io/v2/polyfill.min.js?features=Intl.~locale.en,Promise" />
        <script defer src={`https://maps.googleapis.com/maps/api/js?key=${process.env.GATSBY_GOOGLE_API_KEY}`} type="text/javascript" />
        <script defer src="https://hove.eu-west-2.bidjs.com/static/2.0/js/bid-dependencies.min.js" />
        <script defer src="https://hove.eu-west-2.bidjs.com/static/2.0/prettyphoto/jquery.prettyPhoto.min.js" />
        <script defer src="https://hove.eu-west-2.bidjs.com/static/2.0/js/hbs-bid.min.js" />
        <script defer src="https://hove.eu-west-2.bidjs.com/static/2.0/js/bid.min.js" />
        {props.headComponents}
        <div dangerouslySetInnerHTML={scripting()} />
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
