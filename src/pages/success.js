import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"


const RenderBody = () => {
  return (
    <div className="container text-center block-lg">
      <h1>Success!</h1>
      <p>Thanks for the message, we will get back to you within 24 hours!</p>
      <p><a href='/'>Back to homepage</a></p>
    </div>
  )
}


const SuccessPage = props => {
  return (
    <Layout>
      <SEO title="Success" />
      <RenderBody />
    </Layout>
  )
}
export default SuccessPage
