import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header className="header" data-test="component-header">
        <Link to="/">
          <img
            src="/images/sweet_wine.png"
            alt="logo"
            height="60px"
            width="100px"
            className="header__logo"
          />
        </Link>
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
