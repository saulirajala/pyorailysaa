import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    let subtitle = this.props.subtitle;

    return (
      <header className="App-header">
        <img src={this.props.logo} className="App-logo" alt="Logo" />
        <h1 className="App-title">{this.props.title}</h1>
        <h2 className="App-subtitle">
          {subtitle.charAt(0).toUpperCase() + subtitle.slice(1)}
        </h2>
        <Link to="/">Hae toisen paikkakunnan sää</Link>
      </header>
    );
  }
}

Header.propTypes = {
  subtitle: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Header;
