import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = props => (
  <Layout>
    <SEO title="Contact" />
    <div className="container-fluid">
      <div className="row">
        <div className="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">
          <h1>Say Hello!</h1>
          <p>We pride ourselves in being open and honest about your requirements, we never want you to feel hoodwinked. Many will promise the world for a few pennies, and clients are often disappointed with the end product.</p>
          <form
            name="Contact"
            method="POST"
            action="/success"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="bot-field" />
            <div className="form-group">
              <label htmlFor="name">What's your name?</label>
              <input className="form-control" type="text" name="name" id="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">What's your email address?</label>
              <input className="form-control" type="email" name="email" id="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">How can we help?</label>
              <textarea className="form-control" name="message" id="message" required></textarea>
            </div>
            <div className="form-group">
              <button className="btn btn-primary" type="submit">Send your enquiry</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </Layout>
)

export default ContactPage
