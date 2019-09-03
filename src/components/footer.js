import React from "react"
import { Link } from "gatsby"
import Ombudsman from "../images/the-property-ombudsman.png"
import TSI from "../images/TSI.png"

const Footer = () => (
  <footer className="footer mt-3" role="contentinfo">
    <div className="container-fluid block-lg">
      <div className="row">
        <div className="col-xs-12 col-sm-4">
          <h4>Scottish Property Auctions &copy; {new Date().getFullYear()}</h4>
          272 Bath Street<br/>
          Glasgow<br/>
          Scotland<br/>
          G2 4JR<br />
          <p className=''>T: 0141 266 0125</p>
        </div>
        <div className="col-xs-12 col-sm-4">
          <h4>Links</h4>
          <ul className="list-unstyled">
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/about-us">About us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="col-xs-12 col-sm-4">
          <div className="row d-flex">
            <div className="col-xs-6">
              <img alt="The Property Ombudsman" src={Ombudsman} loading="lazy" className="img-responsive" />
            </div>
            <div className="col-xs-6">
              <img alt="TSI" src={TSI} loading="lazy" className="img-responsive" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
