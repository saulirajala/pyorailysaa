import React, { Component } from 'react';

class SplashScreen extends Component {
	render() {
		return (
			<div>
				<h2>Syötä paikkakunta</h2>
				<input type="text"/>
				<button>Katso sää</button>
			</div>
		);
	}
}

export default SplashScreen;