import React, { Component } from 'react'
import Logo from "../images/Online-Property-Logo.png"

if (typeof window !== 'undefined') {
  var loggedIn = localStorage.getItem('bidJSToken') || null
}

const Header = ({pageName}) => {
  return (
    <React.Fragment>
      <RenderBody pageName={pageName} loggedIn={loggedIn} />
    </React.Fragment>
  )
}

class RenderBody extends Component {
  constructor() {
    super()
    this.state = {
      expanded: false,
      loggerIn: loggedIn
    }
    this.deleteCookie = this.removeCookie.bind(this);
    this.toggleNav = this.toggleNav.bind(this);
  }
  toggleNav() {
    this.setState({
      expanded:!this.state.expanded
    })
  }
  removeCookie() {
    localStorage.removeItem('bidJSToken')
  }

  render() {
    return (
      <React.Fragment>
        <header role="banner">
          <nav className="navbar navbar-default navbar-fixed-top shadow-sm">
            <div className="container-fluid">
              <div className="navbar-header">
                <button className="navbar-toggle" aria-expanded={this.state.expanded} type='button' onClick={ this.toggleNav } onKeyDown={ this.toggleNav }>
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="/"><img alt="Online Property Auctions Scotland Ltd" src={Logo} /></a>
              </div>
              <div hidden={!this.state.expanded} id="main-nav">
                <ul className="nav navbar-nav">
                  <li><a href="/" activeClassName="active" onClick={ this.toggleNav }>Home</a></li>
                  <li><a href="/auction/" onClick={ this.toggleNav }>Auction</a></li>
                  <li><a href="/sell/" activeClassName="active" onClick={ this.toggleNav }>Sell</a></li>
                  <li><a href="/about-us/" activeClassName="active" onClick={ this.toggleNav }>About us</a></li>
                  <li><a href="/contact/" activeClassName="active" onClick={ this.toggleNav }>Contact</a></li>
                </ul>
                <hr className="visible-xs" />
                {this.props.pageName === 'auction' ? (
                  <React.Fragment>
                    <a className="btn btn-secondary navbar-btn pull-right x-bidlogix--trigger-login x-bidlogix--authenticated-hide hidden">Sign Up/Log in</a>
                    <ul className="nav navbar-nav navbar-right">
                      <li className="x-bidlogix--authenticated-show hidden"><a className="clickable x-bidlogix--trigger-my-bids">My bids</a></li>
                      <li className="x-bidlogix--authenticated-show hidden"><a className="clickable x-bidlogix--trigger-my-settings">My settings</a></li>
                      <li className="x-bidlogix--authenticated-show hidden"><a className="clickable x-bidlogix--trigger-logout">Log out</a></li>
                    </ul>
                  </React.Fragment>
                ):(
                  <React.Fragment>
                    {loggedIn === null ? (
                      <a href="/auction/#!/login" className="btn btn-secondary navbar-btn pull-right">Sign Up/Log in</a>
                    ):(
                      <ul className="nav navbar-nav navbar-right">
                        <li><a href="/auction/#!/myBids">My bids</a></li>
                        <li><a href="/auction/#!/mySettings">My settings</a></li>
                        <li><a href="#" onClick={ this.removeCookie }>Log out</a></li>
                      </ul>
                    )}
                  </React.Fragment>
                )}
              </div>
            </div>
          </nav>
        </header>
      </React.Fragment>
    )
  }
}

export default Header