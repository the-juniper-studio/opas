import React, { Component } from 'react'
import { Link } from 'gatsby';
import Logo from "../images/Online-Property-Logo.png"

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
                  <li><Link to="/" activeClassName="active" >Home</Link></li>
                  <li><a href="/auction/">Auction</a></li>
                  <li><Link to="/sell/" activeClassName="active">Sell</Link></li>
                  <li><Link to="/about-us/" activeClassName="active">About us</Link></li>
                  <li><Link to="/contact/" activeClassName="active">Contact</Link></li>
                </ul>
                <p className='hidden-sm navbar-text pull-right'>Phone: <a href="tel:+441412660125">0141 266 0125</a></p>
                {this.props.pageName === 'auction' ? (
                  <ul className="nav navbar-nav navbar-right">
                    <li className='x-bidlogix--authenticated-hide hidden'><a href="/auction/#!/login" className="btn btn-secondary navbar-btn pull-right x-bidlogix--trigger-login">Sign Up/Log in</a></li>
                    <li className="x-bidlogix--authenticated-show"><a className="clickable x-bidlogix--trigger-my-bids">My bids</a></li>
                    <li className="x-bidlogix--authenticated-show"><a href="#!/invoices">My invoices</a></li>
                    <li className="x-bidlogix--vendor-show hidden"><a href="#!/mySales">My sales</a></li>
                    <li className="x-bidlogix--administrator-show hidden"><a target="_blank" rel="noopener">Admin</a></li>
                    <li role="separator" className="divider"></li>
                    <li className="x-bidlogix--authenticated-show"><a className="clickable x-bidlogix--trigger-my-settings">My settings</a></li>
                    <li className="x-bidlogix--authenticated-show"><a className="clickable x-bidlogix--trigger-logout">Log out</a></li>
                  </ul>
                ):(<a href="/auction/#!/login" className="btn btn-secondary navbar-btn pull-right">Sign Up/Log in</a>)}
              </div>
            </div>
          </nav>
        </header>
      </React.Fragment>
    )
  }
}

export default Header
