import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

function scriptbottom() {
  return {__html: `
    <script>
        window.addEventListener('DOMContentLoaded', function() {
          (function($) {
            $(document).ready(function() {
              PageApp.start();
            });
          })(jQuery);
        });
        var loadDeferredStyles = function() {
          var addStylesNode = document.getElementById("deferred-styles");
          var replacement = document.createElement("div");
          replacement.innerHTML = addStylesNode.textContent;
          document.body.appendChild(replacement)
          addStylesNode.parentElement.removeChild(addStylesNode);
        };
        var raf = requestAnimationFrame || mozRequestAnimationFrame ||
          webkitRequestAnimationFrame || msRequestAnimationFrame;
        if (raf) raf(function() { window.setTimeout(loadDeferredStyles, 0); });
        else window.addEventListener('load', loadDeferredStyles);
    </script>
  `};
}

function scripttop() {
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

const IndexPage = () => {
  return (
    <Layout pageName='auction'>
      <SEO title="Auction | Online Property Auctions Scotland" description="Bid on up to 50 properties every month in our national online property auctions. Bid live, in real time on Residential and Commercial Property and Land. Register now to get full access to the auctions and further membership benefits." lang='en-gb' />

      <script defer src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossOrigin="anonymous"></script>
      <script defer src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js" integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd" crossOrigin="anonymous" />
      <script defer src="https://cdn.polyfill.io/v2/polyfill.min.js?features=Intl.~locale.en,Promise" />
      <script defer src={`https://maps.googleapis.com/maps/api/js?key=${process.env.GATSBY_GOOGLE_API_KEY}`} type="text/javascript" />
      <script defer src="https://hove.eu-west-2.bidjs.com/static/2.0/js/bid-dependencies.min.js" />
      <script defer src="https://hove.eu-west-2.bidjs.com/static/2.0/prettyphoto/jquery.prettyPhoto.min.js" />
      <script defer src="https://hove.eu-west-2.bidjs.com/static/2.0/js/hbs-bid.min.js" />
      <script defer src="https://hove.eu-west-2.bidjs.com/static/2.0/js/bid.min.js" />

      <div dangerouslySetInnerHTML={scripttop()} />

      <div className="container-fluid mt-2">
        <noscript id="deferred-styles">
          <link href="https://hove.eu-west-2.bidjs.com/static/2.0/prettyphoto/jquery.prettyPhoto.min.css" rel="stylesheet" type="text/css" />
          <link href="https://hove.eu-west-2.bidjs.com/static/2.0/css/bid--no-bootstrap.min.css" rel="stylesheet" type="text/css" />
        </noscript>
        <div id='bidlogix-app' className='bidlogix-app'>
          <div className='text-center'>
            <svg width='200px' height='200px' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid' className='lds-dual-ring'>
              <circle cx='50' cy='50' fill='none' strokeLinecap='round' r='20' strokeWidth='2' stroke='#337ab7' strokeDasharray='31.41592653589793 31.41592653589793' transform='rotate(150 50 50)'>
                <animateTransform attributeName='transform' type='rotate' calcMode='linear' values='0 50 50;360 50 50' keyTimes='0;1' dur='3s' begin='0s' repeatCount='indefinite'></animateTransform>
              </circle>
              <circle cx='50' cy='50' fill='none' strokeLinecap='round' r='15' strokeWidth='2' stroke='#333' strokeDasharray='23.561944901923447 23.561944901923447' strokeDashoffset='23.561944901923447' transform='rotate(-150 50 50)'>
                <animateTransform attributeName='transform' type='rotate' calcMode='linear' values='0 50 50;-360 50 50' keyTimes='0;1' dur='3s' begin='0s' repeatCount='indefinite'></animateTransform>
              </circle>
            </svg>
          </div>
        </div>
        <div className='bidlogix-app'>
          <div id='bidlogix-modal'></div>
        </div>
        <div className='bidlogix-app'>
          <div id='bidjs'></div>
        </div>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        <div dangerouslySetInnerHTML={scriptbottom()} />
      </div>
    </Layout>
  )
}

export default IndexPage
