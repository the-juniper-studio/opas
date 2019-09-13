import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="container text-center block-lg">
      <h1>PAGE NOT FOUND</h1>
      <p>But don't be sad, this is no-dead end</p>
      <Link to='/' className='btn btn-primary btn-lg'>Take me home</Link>
    </div>
  </Layout>
)

export default NotFoundPage
