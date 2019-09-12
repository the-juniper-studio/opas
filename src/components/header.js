import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import Logo from "../images/Online-Property-Logo.png"

const Header = ({ siteTitle }) => (

  <header role="banner">
    <nav className="navbar navbar-default navbar-fixed-top shadow-sm">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-nav" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link className="navbar-brand" to="/"><img alt="Online Property Auctions Scotland Ltd" src={Logo} /></Link>
        </div>

        <div className="collapse navbar-collapse" id="main-nav">
          <ul className="nav navbar-nav">
            <li><Link to="/">Home</Link></li>
            <li><a href="/auction/">Auction</a></li>
            <li><Link to="/sell/">Sell</Link></li>
            <li><Link to="/about-us/">About us</Link></li>
            <li><Link to="/contact/">Contact</Link></li>
          </ul>
          <p className='hidden-sm navbar-text pull-right'>Phone: <a href="tel:+441412660125">0141 266 0125</a></p>
          <a href="/auction/#!/login" className="btn btn-secondary navbar-btn pull-right x-bidlogix--trigger-login">Sign Up/Log in</a>
        </div>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
