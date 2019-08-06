import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = props => (
  <Layout>
    <SEO title="Sell" />
    <div className="container-fluid">
      <div className="row">
        <div className="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">
          <h1>Sell With Us</h1>
          <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
          <form
            name="Sell"
            method="POST"
            action="/success"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="bot-field" />
            <fieldset> 
              <legend>Your details</legend>
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
            </fieldset>
            <fieldset>
              <legend>Property</legend>
              <div className="form-group">
                <label htmlFor="addressline1">House name/number</label>
                <input className="form-control" type="text" name="addressline1" id="addressline1" ></input>
              </div>  
              <div className="form-group">
                <label htmlFor="addressline2">Street</label>
                <input className="form-control" type="text" name="addressline2" id="addressline2" ></input>
              </div>  
              <div className="form-group">
                <label htmlFor="city">Town / City</label>
                <input className="form-control" type="text" name="city" id="city" ></input>
              </div>  
              <div className="form-group">
                <label htmlFor="city">Postcode</label>
                <input className="form-control" type="text" name="city" id="city" ></input>
              </div>  
              <div className="form-group">
                <label htmlFor="propertytype">Property type</label>
                <select className="form-control" name="propertytype" id="propertytype">
                  <option value="house">House</option>
                  <option value="Land">Land</option>
                  <option value="Industrial">Industrial</option>
                </select>
              </div>  
            </fieldset>
            <div className="form-group">
              <label htmlFor="message">How can we help?</label>
              <textarea className="form-control" name="message" id="message"></textarea>
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
