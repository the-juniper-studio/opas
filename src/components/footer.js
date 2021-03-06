import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { withPreview } from 'gatsby-source-prismic-graphql';
import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../utils/linkResolver';

import Ombudsman from "../images/the-property-ombudsman.png"
import TSI from "../images/TSI.png"
import RightMove from "../images/right-move.png"


const query = graphql`
  query {
    prismic {
      allNavigations {
        edges {
          node {
            _meta {
              uid
              tags
            }
            company_display_name
            company_address
            company_phone
            footer_links {
              link_label
              link {
                _linkType
                ... on PRISMIC_Content_page {
                  _meta {
                    uid
                    type
                  }
                }
                ... on PRISMIC_Contact_page {
                  _meta {
                    uid
                    type
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;


export const Footer = () => (
  <StaticQuery
    query={query}
    render={withPreview(data => {
      return (
        <footer className="footer mt-3" role="contentinfo">
          <div className="container-fluid block-lg">
            <div className="row">
              <div className="col-xs-12 col-sm-4">
                <h4>{data.prismic.allNavigations.edges[0].node.company_display_name} &copy; {new Date().getFullYear()}</h4>
                {RichText.render(data.prismic.allNavigations.edges[0].node.company_address, linkResolver)}
                <p className=''>T: <a href={`tel:+44${data.prismic.allNavigations.edges[0].node.company_phone}`}>{data.prismic.allNavigations.edges[0].node.company_phone}</a></p>
              </div>
              <div className="col-xs-12 col-sm-3">
                <h4>Links</h4>
                <ul className="list-unstyled">
                  {data.prismic.allNavigations.edges[0].node.footer_links.map((slice, index) => {
                    const page = slice.link._meta.type.replace('_page','')
                    return (
                      <li key={`footer-${index}`}>
                        {slice.link._meta.uid != null ? (
                          <a href={`/${slice.link._meta.uid}`}>{slice.link_label}</a>
                        ):(
                          <a href={`/${page}`}>{slice.link_label}</a>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </div>
              <div className="col-xs-12 col-sm-5">
                <div className="row d-flex">
                  <div className="col-xs-4">
                    <img alt="The Property Ombudsman" src={Ombudsman} loading="lazy" className="img-responsive" />
                  </div>
                  <div className="col-xs-4">
                    <img alt="TSI" src={TSI} loading="lazy" className="img-responsive" />
                  </div>
                  <div className="col-xs-4">
                    <img alt="Right Move" src={RightMove} loading="lazy" className="img-responsive" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      )
    }, query)}
  />
);

export default Footer