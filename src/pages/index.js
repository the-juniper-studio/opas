import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>TEST BED</h1>
    <div className='container'>
      <div id='bidlogix-app' className='row bidlogix-app'>
        <div className='col-xs-12 text-center'>
          <svg width='200px' height='200px' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid' className='lds-dual-ring'>
            <circle cx='50' cy='50' fill='none' stroke-linecap='round' r='20' stroke-width='2' stroke='#337ab7' stroke-dasharray='31.41592653589793 31.41592653589793' transform='rotate(150 50 50)'>
              <animateTransform attributeName='transform' type='rotate' calcMode='linear' values='0 50 50;360 50 50' keyTimes='0;1' dur='3s' begin='0s' repeatCount='indefinite'></animateTransform>
            </circle>
            <circle cx='50' cy='50' fill='none' stroke-linecap='round' r='15' stroke-width='2' stroke='#333' stroke-dasharray='23.561944901923447 23.561944901923447' stroke-dashoffset='23.561944901923447' transform='rotate(-150 50 50)'>
              <animateTransform attributeName='transform' type='rotate' calcMode='linear' values='0 50 50;-360 50 50' keyTimes='0;1' dur='3s' begin='0s' repeatCount='indefinite'></animateTransform>
            </circle>
          </svg>
        </div>
      </div>
    </div>
    <div className='bidlogix-app'>
      <div id='bidlogix-modal'></div>
    </div>
    <div className='container bidlogix-app'>
      <div id='bidjs'></div>
    </div>
  </Layout>
)

export default IndexPage
