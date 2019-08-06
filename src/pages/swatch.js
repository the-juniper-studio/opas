import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Swatch = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="container text-center block-lg">
      <h1>Swatch</h1>
      <div className="main__content">
        <h2>Here's the things that makes The Brand</h2>
        <h3>Backgrounds Colours</h3>
        <p>Some of the colours will have hardcoded inversed text colours to ensure there are no contrast issues</p>
        <div className="grid grid__3-col text-center">
          <div className="block bg-purple">
            .bg-grey <code>HEX: #465F7F</code>
          </div>
          <div className="block bg-blue">
            .bg-blue <code>HEX: #0065BD</code>
          </div>

        </div>
        <h3>Text Colours</h3>
        <div className="grid grid__3-col text-center">
          <div className="block text-purple">
            .text-grey
          </div>
          <div className="block text-blue">
            .text-blue
          </div>
          <div className="block text-white">
            .text-white
          </div>
        </div>
        <h3>Vertical Spacing</h3>
        <div>
          <div className="block bg-yellow">
            .block
          </div>
          <div className="bg-green block__large">
            .block__large
          </div>
        </div>
        <h3>Font Families</h3>
        <p>The font families in play that help idenitfy the Juniper brand and Juniper Mark</p>
        <div className="block">
          <h1>h1 - Playfair Display, serif</h1>
          <h2>h2 - Playfair Display, serif</h2>
          <h3>h3 - Open Sans, serif</h3>
          <h4>h4 - Open Sans, serif</h4>
          <h5>h5 - Open Sans, serif</h5>
          <h6>h6 - Playfair Display, serif</h6>
        </div>
        <p>Edwardian Medium can be added to any element to apply the Juniper Mark font family:</p>
        <div className="block">
          <p className="heading">.heading - Edwardian_Medium</p>
          <p className="heading heading__quotes">.heading .heading__quotes</p>
        </div>
        <h3>Text Alignment</h3>
        <div>
          <div className="block text-center">
            .text-center
          </div>
          <div className="block text-right">
            .text-right
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Swatch
