import React, { Component } from 'react'
import { StaticQuery, graphql, Link } from "gatsby"
import { withPreview } from 'gatsby-source-prismic-graphql';
import Logo from "../images/Online-Property-Logo.png"


const query = graphql`
  query {
    prismic {
      allNavigations {
        edges {
          node {
            company_display_name
            company_phone
            header_links {
              link_label
              ... on PRISMIC_NavigationHeader_links {
                link_label
                link {
                  ... on PRISMIC_Home_page {
                    _meta {
                      type
                    }
                  }
                  ... on PRISMIC_Content_page {
                    _meta {
                      uid
                    }
                  }
                  ... on PRISMIC_Sell_page {
                    _meta {
                      type
                    }
                  }
                  ... on PRISMIC_Contact_page {
                    _meta {
                      type
                    }
                  }
                  ... on PRISMIC_Auction_page{
                    _meta {
                      type
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

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
    const loggedIn = typeof window === 'undefined' ? false : (localStorage.getItem('bidJSToken') !== null)
    this.state = {
      expanded: false,
      loggedIn
    }
    this.removeCookie = this.removeCookie.bind(this);
    this.toggleNav = this.toggleNav.bind(this);
  }
  toggleNav() {
    this.setState({
      expanded:!this.state.expanded
    })
  }
  removeCookie() {
    localStorage.removeItem('bidJSToken')
    this.setState({
      loggedIn: false
    })
    
  }

  render() {
    return (
      <StaticQuery
        query={query}
        render={withPreview(data => {
          const headerData = data.prismic.allNavigations.edges[0].node
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
                      <a className="navbar-brand" href="/"><img alt={headerData.company_display_name} src={Logo} /></a>
                    </div>
                    <div hidden={!this.state.expanded} id="main-nav">
                      <ul className="nav navbar-nav">
                        {headerData.header_links.map((nav, index) => {
                          var headerLink = '/'
                          if (nav.link !== null && nav.link._meta.type !== 'home_page') {
                            headerLink = nav.link._meta.type || nav.link._meta.uid || '/'
                          }
                          return (
                            <li key={`nav-${index}`}><Link to={headerLink.replace('_page', '')} activeClassName="active"  onClick={ this.toggleNav }>{nav.link_label}</Link></li>
                          )
                        })}
                      </ul>
                      {this.props.pageName === 'auction' ? (
                        <React.Fragment>
                          <a className="btn btn-secondary navbar-btn pull-right x-bidlogix--trigger-login x-bidlogix--authenticated-hide hidden">Register/Log in</a>
                          <ul className="nav navbar-nav navbar-right">
                            <li className="x-bidlogix--authenticated-show hidden"><a className="clickable x-bidlogix--trigger-my-bids">My bids</a></li>
                            <li className="x-bidlogix--authenticated-show hidden"><a className="clickable x-bidlogix--trigger-my-settings">My settings</a></li>
                            <li className="x-bidlogix--authenticated-show hidden"><a className="clickable x-bidlogix--trigger-logout">Log out</a></li>
                          </ul>
                        </React.Fragment>
                      ):(
                        <React.Fragment>
                          {this.state.loggedIn === false ? (
                            <a href="/auction/#!/login" className="btn btn-secondary navbar-btn pull-right">Register/Log in</a>
                          ):(
                            <React.Fragment>
                              <hr className="visible-xs" />
                              <ul className="nav navbar-nav navbar-right">
                                <li><a href="/auction/#!/myBids">My bids</a></li>
                                <li><a href="/auction/#!/mySettings">My settings</a></li>
                                <li><a href="#" onClick={ this.removeCookie }>Log out</a></li>
                              </ul>
                            </React.Fragment>
                          )}
                        </React.Fragment>
                      )}
                      <hr className="visible-xs" />
                      {headerData.company_phone && (
                        <a href={`tel:${headerData.company_phone}`} className="d-block mr-2 navbar-right navbar-text">Phone: <span className="text-primary">{headerData.company_phone}</span></a>
                      )}
                    </div>
                  </div>
                </nav>
              </header>
            </React.Fragment>
          )
        }, query)}
      />
    )
  }
}

export default Header