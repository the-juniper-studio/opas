import React, { Component } from 'react'
import { Link } from 'gatsby';
import Logo from "../images/Online-Property-Logo.png"


export const query = graphql`
  query navigationHeadQuery($uid: String) {
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


const Header = ({pageName}) => {
  return (
    <React.Fragment>
      <RenderBody pageName={pageName} />
    </React.Fragment>
  )
}

class RenderBody extends Component {
  constructor() {
    super()
    this.state = {
      expanded: false
    }
    this.toggleNav = this.toggleNav.bind(this);
  }
  toggleNav() {
    this.setState({
      expanded:!this.state.expanded
    })
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
                <Link className="navbar-brand" to="/"><img alt="Online Property Auctions Scotland Ltd" src={Logo} /></Link>
              </div>
              <div hidden={!this.state.expanded} id="main-nav">
                <ul className="nav navbar-nav">
                  <li><Link to="/" activeClassName="active" onClick={ this.toggleNav }>Home</Link></li>
                  <li><a href="/auction/" onClick={ this.toggleNav }>Auction</a></li>
                  <li><Link to="/sell/" activeClassName="active" onClick={ this.toggleNav }>Sell</Link></li>
                  <li><Link to="/about-us/" activeClassName="active" onClick={ this.toggleNav }>About us</Link></li>
                  <li><Link to="/contact/" activeClassName="active" onClick={ this.toggleNav }>Contact</Link></li>
                </ul>
                <p className='hidden-sm navbar-text pull-right'>Phone: <a href="tel:+441412660125">0141 266 0125</a></p>
                <React.Fragment>
                  <a href="/auction/#!/login" className="btn btn-secondary navbar-btn pull-right x-bidlogix--authenticated-hide hidden">Sign Up/Log in</a>
                  <ul className="nav navbar-nav navbar-right">
                    <li className="x-bidlogix--authenticated-show"><a href="/auction/#!/myBids">My bids</a></li>
                    <li className="x-bidlogix--authenticated-show"><a href="/auction/#!/mySettings">My settings</a></li>
                    <li className="x-bidlogix--authenticated-show"><a className="clickable x-bidlogix--trigger-logout">Log out</a></li>
                  </ul>
                </React.Fragment>
              </div>
            </div>
          </nav>
        </header>
      </React.Fragment>
    )
  }
}

export default Header
