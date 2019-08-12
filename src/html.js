import React from "react"
import PropTypes from "prop-types"

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
        <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossOrigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js" integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd" crossOrigin="anonymous" />
        <script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=Intl.~locale.en,Promise" />
        <script src="https://maps.googleapis.com/maps/api/js?key=MY_GOOGLE_MAPS_API" type="text/javascript" />
        <script src="https://hove.eu-west-2.bidjs.com/static/2.0/js/bid-dependencies.min.js" />
        <script src="https://hove.eu-west-2.bidjs.com/static/2.0/prettyphoto/jquery.prettyPhoto.min.js" />
        <script src="https://hove.eu-west-2.bidjs.com/static/2.0/js/hbs-bid.min.js" />
        <script src="https://hove.eu-west-2.bidjs.com/static/2.0/js/bid.min.js" />

        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        {props.headComponents}
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
      <script>
        {`
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
          `}
      </script>
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
