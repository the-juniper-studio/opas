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
          <Link className="navbar-brand" to="/"><img alt="{ siteTitle }" src={Logo} /></Link>
        </div>

        <div className="collapse navbar-collapse" id="main-nav">
          <ul className="nav navbar-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/auction">Auction</Link></li>
            <li><Link to="/sell">Sell</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
          <button className="btn btn-secondary navbar-btn navbar-right mr-1 x-bidlogix--trigger-login">Sign Up/Log in</button>
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
