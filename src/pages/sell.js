import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../utils/linkResolver';

export const sellQuery = graphql`
  query sellPageQuery($uid: String) {
    prismic {
      allSell_pages(uid: $uid) {
        edges {
          node {
            meta_title
            meta_keywords
            meta_description
            title
            content
            hero
          }
        }
      }
    }
  }
`

const RenderBody = ({ sellPage }) => {
  return (
    <React.Fragment>
      <SEO title="Sell" />
      {sellPage.hero && (
        <picture>
          <source srcset={sellPage.hero.Mobile.url} loading="lazy" media="(max-width: 768px)" class="img-responsive" />
          <img src={sellPage.hero.url} loading="lazy" alt={sellPage.hero.alt} class="img-responsive" />
        </picture>
      )}
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">
            <h1>{sellPage.title}</h1>
            {RichText.render(sellPage.content, linkResolver)}
            <form
              name="Sell"
              method="POST"
              action="/success"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="Sell" />
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
                  <label htmlFor="postcode">Postcode</label>
                  <input className="form-control" type="text" name="postcode" id="postcode" ></input>
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
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}


const SellPage = props => {
  const doc = props.data.prismic.allSell_pages.edges.slice(0,1).pop();
  if(!doc) return null;

  return (
    <Layout>
      <SEO title={doc.node.meta_title} keywords={doc.node.meta_keywords} description={doc.node.meta_description} lang='en-gb' />
      <RenderBody sellPage={doc.node} />
    </Layout>
  )
}
export default SellPage
