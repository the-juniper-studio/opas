import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"
import "../styles/layout.scss"

const Layout = ({ children }) => {

  return (
    <React.Fragment>
      <Header siteTitle="Scotish Property Auctions" />
      <main role="main">{children}</main>
      <Footer />
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
