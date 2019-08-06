import React from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../utils/linkResolver';
import SEO from "../components/seo"


export const query = graphql`
  query legalPageQuery($uid: String) {
    prismic {
      allLegal_pages(uid: $uid) {
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

const RenderBody = ({ landingPage }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2">
          <h1>{landingPage.title}</h1>
          <div>{RichText.render(landingPage.content, linkResolver)}</div>
        </div>
      </div>
    </div>
  )
}

const LandingPage = props => {
  const doc = props.data.prismic.allLegal_pages.edges.slice(0,1).pop();
  if(!doc) return null;

  return(
    <Layout>
      <SEO title='contact' />
      <RenderBody landingPage={doc.node} />
    </Layout>
  )
}
export default LandingPage
