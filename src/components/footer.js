import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
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
            company_name
            company_address
            company_phone
            site_logo
            footer_links {
              link_label
              link {
                _linkType
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
                {RichText.render(data.prismic.allNavigations.edges[0].node.company_name, linkResolver)} 
                {RichText.render(data.prismic.allNavigations.edges[0].node.company_address, linkResolver)}
                <p className=''>T: <a href="tel:+441412660125">{data.prismic.allNavigations.edges[0].node.company_phone}</a></p>
              </div>
              <div className="col-xs-12 col-sm-3">
                <h4>Links</h4>
                <ul className="list-unstyled">
                  <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                  <li><Link to="/about-us">About us</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
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
              <div className="col-xs-12">
              Copyright {RichText.render(data.prismic.allNavigations.edges[0].node.company_name, linkResolver)} &copy; {new Date().getFullYear()}
              </div>
            </div>
          </div>
        </footer>
      )
    }, query)}
  />
);

export default Footer
