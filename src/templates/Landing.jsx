import React from 'react'
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../utils/linkResolver';
import SEO from "../components/seo"


export const query = graphql`
  query contentPageQuery($uid: String) {
    prismic {
      allContent_pages(uid: $uid) {
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
            hero
          }
        }
      }
    }
  }
`

const RenderBody = ({ contentPage }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-md-10 col-md-offset-1 col-lg-8 col-lg-offset-2">
          <h1>{contentPage.title}</h1>
          <div>{RichText.render(contentPage.content, linkResolver)}</div>
        </div>
        {contentPage.hero && (
          <picture>
            <source media="(max-width: 800px)" srcset={contentPage.hero.url} />
            <source media="(min-width: 801px)" srcset={contentPage.hero.Mobile.url} />
            <img className="img-responsive" src={contentPage.hero.url} alt={contentPage.hero.alt} />
          </picture>
        )}
      </div>
    </div>
  )
}

const ContentPage = props => {
  const doc = props.data.prismic.allContent_pages.edges.slice(0,1).pop();
  if(!doc) return null;

  return(
    <Layout>
      <SEO title={doc.node.meta_title} keywords={doc.node.meta_keywords} description={doc.node.meta_description} lang='en-gb' />
      <RenderBody contentPage={doc.node} />
    </Layout>
  )
}
export default ContentPage
