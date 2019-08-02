import React from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"


export const query = graphql`
  query landingPageQuery($uid: String) {
    prismic {
      allLanding_pages(uid: $uid) {
        edges {
          node {
            _meta {
              uid
              tags
            }
            slug
            meta_robots
            meta_title
            meta_description
            title
            hero
            content
            terms_and_conditions
          }
        }
      }
    }
  }
`

const RenderBody = ({ landingPage }) => {
  return (
    <div className="container-fluid">
      <h1>{landingPage.title}</h1>
    </div>
  )
}

const LandingPage = props => {
  const doc = props.data.prismic.allLanding_pages.edges.slice(0,1).pop();
  if(!doc) return null;

  return(
    <Layout>
      <SEO title={doc.node.meta_title} keywords={doc.node.meta_keywords} description={doc.node.meta_description} lang='en-gb' />
      <RenderBody landingPage={doc.node} />
    </Layout>
  )
}
export default LandingPage
