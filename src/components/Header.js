import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    let subtitle = this.props.subtitle;
    if (subtitle == 'moro') {
      console.log('moro');
    }
    return (
      <header className="App-header">
        <img src={this.props.logo} />
        <h1 className="App-title">{this.props.title}</h1>
        <h2 className="App-subtitle">
          {subtitle.charAt(0).toUpperCase() + subtitle.slice(1)}
        </h2>
        <Link to="/">Hae toisen paikkakunnan sää</Link>
      </header>
    );
  }
}

export default Header;
