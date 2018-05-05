import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<header className="App-header">
				<img src={this.props.logo} className="App-logo" alt="logo"/>
				<h1 className="App-title">{this.props.title}</h1>
				<h2 className="App-subtitle">{this.props.subtitle}</h2>
			</header>
		);
	}
}

export default Header;