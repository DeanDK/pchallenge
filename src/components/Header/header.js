import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header className="header" data-test="component-header">
        <img src="/images/cloudoki.png" alt="logo" className="header__logo" />
        <nav className="header__navigation-links">
          <div className="header__navigation-links-link-home">
            <Link to="/">Home</Link>
          </div>
          <div className="header__navigation-links-link-add">
            <Link to="/add">Add</Link>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
