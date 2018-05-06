import React, { Component } from 'react';
import {
	Redirect,
} from 'react-router-dom';

class SplashScreen extends Component {

	constructor( props ) {
		super( props );
		this.state = {
			place: '',
			redirect: false
		};
		// This binding is necessary to make `this` work in the callback
		this.renderRedirect = this.renderRedirect.bind( this );
		this.onChange = this.onChange.bind( this );
		this.handleClick = this.handleClick.bind( this );
	}

	handleClick() {

		// Do nothing, if place is empty.
		if ( this.state.place === '' ) {
			return;
		}

		this.setState( {
			redirect: true
		} );
	}

	onChange( e ) {
		this.setState( {
			place: e.target.value
		} );
	}

	renderRedirect( e ) {
		if ( this.state.redirect ) {
			return (
				<Redirect to={this.state.place}/>
			);
		}
	}

	render() {
		return (
			<div>
				{this.renderRedirect()}
				<h2>Syötä paikkakunta</h2>
				<input type="text" onChange={this.onChange}/>
				<button onClick={this.handleClick}>Katso sää</button>
			</div>
		);
	}
}

export default SplashScreen;