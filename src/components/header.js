import React, { Component } from 'react'
import { StaticQuery, graphql, Link } from "gatsby"
import { withPreview } from 'gatsby-source-prismic-graphql';
import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../utils/linkResolver';

const query = graphql`
  query {
    prismic {
      allNavigations {
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
`;

export const Header = () => (
  <StaticQuery
    query={query}
    render={withPreview(data => {
      return (
        <React.Fragment>
          <RenderBody />
        </React.Fragment>
      )
    }, query)}
  />
);

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
                <Link className="navbar-brand" to="/"><img alt="PRISMIC company_name" src="PRISMIC site_logo" /></Link>
              </div>
              <div hidden={!this.state.expanded} id="main-nav">
                <ul className="nav navbar-nav">
                  <li><Link to="/" activeClassName="active" onClick={ this.toggleNav }>Home</Link></li>
                  <li><a href="/auction/" onClick={ this.toggleNav }>Auction</a></li>
                  <li><Link to="/sell/" activeClassName="active" onClick={ this.toggleNav }>Sell</Link></li>
                  <li><Link to="/about-us/" activeClassName="active" onClick={ this.toggleNav }>About us</Link></li>
                  <li><Link to="/contact/" activeClassName="active" onClick={ this.toggleNav }>Contact</Link></li>
                </ul>
                <hr className="visible-xs" />
                <React.Fragment>
                  <ul className="nav navbar-nav navbar-right">
                    <li className="x-bidlogix--authenticated-show hidden"><a href="/auction/#!/myBids">My bids</a></li>
                    <li className="x-bidlogix--authenticated-show hidden"><a href="/auction/#!/mySettings">My settings</a></li>
                    <li className="x-bidlogix--authenticated-show hidden"><a className="clickable x-bidlogix--trigger-logout">Log out</a></li>
                    <li className='hidden-sm'><a href="tel:+44 PRISMIC company_phone">Phone: <span className="text-primary">PRISMIC company_phone</span></a></li>
                  </ul>
                  <a href="/auction/#!/login" className="btn btn-secondary navbar-btn pull-right x-bidlogix--authenticated-hide">Sign Up/Log in</a>
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
