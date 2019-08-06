import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"
import "../styles/layout.scss"

const Layout = ({ children }) => {

  return (
    <>
      <Header siteTitle="Scotish Property Auctions" />
      <main role="main">{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
