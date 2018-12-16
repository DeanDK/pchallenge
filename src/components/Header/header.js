import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header className="header" data-test="component-header">
        <Link to="/">
          <img
            src="/images/pipedrive_logo.png"
            alt="logo"
            height="55px"
            width="180px"
            className="header__logo"
          />
        </Link>
      </header>
    );
  }
}

export default Header;
