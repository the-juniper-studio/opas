import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = props => (
  <Layout>
    <SEO title="Contact" />
    <div className="container-fluid">
      <div className="row">
        <div className="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">
          <h1>Contact Us</h1>
          <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
          <form
            name="Contact"
            method="POST"
            action="/success"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="bot-field" />
            <div className="form-group">
              <label htmlFor="name">Name<sup>*</sup></label>
              <input className="form-control" type="text" name="name" id="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email<sup>*</sup></label>
              <input className="form-control" type="email" name="email" id="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input className="form-control" type="tel" name="phone" id="phone" />
            </div>
            <div className="form-group">
              <label htmlFor="message">How can we help?<sup>*</sup></label>
              <textarea className="form-control" name="message" id="message" required></textarea>
            </div>
            <div className="form-group">
              <button className="btn btn-primary" type="submit">Send</button>
            </div>
            <p>We aim to respond to enquiries within 48 hours</p>
          </form>
        </div>
      </div>
    </div>
  </Layout>
)

export default ContactPage
