import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"
import "../styles/layout.scss"

const Layout = ({ children, pageName }) => {
  return (
    <React.Fragment>
      <a className="sr-only sr-only-focusable" href="#main">Skip to main content</a>
      <Header siteTitle="Scotish Property Auctions" pageName={pageName} />
      <main role="main">{children}</main>
      <Footer />
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
