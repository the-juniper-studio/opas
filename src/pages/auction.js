import React from "react"
import Layout from "../components/layout"
import Helmet from "react-helmet"

function scripting() {
  return {__html: `
    <script>
        window.addEventListener('DOMContentLoaded', function() {
          (function($) {
            $(document).ready(function() {
              PageApp.start();
            });
          })(jQuery);
        });
        function startApplication () {
          (function($) {
            $(document).ready(function() {
              PageApp.start();
            });
          })(jQuery);
        };
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

const IndexPage = () => {
  return (
    <Layout>
      <Helmet>
        <script>{`
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
        `}</script>
      </Helmet>
      
      <div className="container-fluid">
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
        <div className='bidlogix-app mt-3'>
          <div id='bidjs'></div>
        </div>
        <div dangerouslySetInnerHTML={scripting()} />
      </div>
    </Layout>
  )
}

export default IndexPage
