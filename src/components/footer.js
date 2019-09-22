import React from "react"
import { graphql, Link } from "gatsby"
import Ombudsman from "../images/the-property-ombudsman.png"
import TSI from "../images/TSI.png"
import RightMove from "../images/right-move.png"


export const query = graphql`
  query navigationQuery($uid: String) {
    prismic {
      allNavigations(uid: $uid) {
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
`


const Footer = ( Navigation ) => (
  <footer className="footer mt-3" role="contentinfo">
    <div className="container-fluid block-lg">
      <div className="row">
        <div className="col-xs-12 col-sm-4">
          <h4>{Navigation.company_name} &copy; {new Date().getFullYear()}</h4>
          {Navigation.company_address}
          <p className=''>T: <a href="tel:+441412660125">{Navigation.company_phone}</a></p>
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
      </div>
    </div>
  </footer>
)

export default Footer
