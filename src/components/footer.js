import React from "react"
import { Link } from "gatsby"

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
          Tel: +44 (0)123 456 7890<br/>
          Email: contact@scottishpropertyauctions.com
        </div>
        <div className="col-xs-12 col-sm-4">
          <h4>Links</h4>
          <ul className="list-unstyled">
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/cookie">Cookie Policy</Link></li>
            <li><Link to="/legal">Legal</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="col-xs-12 col-sm-4">

        </div>
      </div>
    </div>
  </footer>
)

export default Footer
