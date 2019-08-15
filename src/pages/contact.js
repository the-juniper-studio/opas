import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../utils/linkResolver';

export const contactQuery = graphql`
  query contactPageQuery($uid: String) {
    prismic {
      allContact_pages(uid: $uid) {
        edges {
          node {
            _meta {
              uid
              tags
            }
            meta_title
            meta_keywords
            meta_description
            title
            content
          }
        }
      }
    }
  }
`

const RenderBody = ({ contactPage }) => {
  return (
    <React.Fragment>
      <SEO title="Contact" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">
            <h1>{contactPage.title}</h1>
            {RichText.render(contactPage.content, linkResolver)}
            <form
              name="Contact"
              method="POST"
              action="/success"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="Contact" />
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
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

const ContactPage = props => {
  const doc = props.data.prismic.allContact_pages.edges.slice(0,1).pop();
  if(!doc) return null;

  return (
    <Layout>
      <SEO title={doc.node.meta_title} keywords={doc.node.meta_keywords} description={doc.node.meta_description} lang='en-gb' />
      <RenderBody contactPage={doc.node} />
    </Layout>
  )
}
export default ContactPage
