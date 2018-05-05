import React, { Component } from 'react';
import Map from '../map.png';

class RainMap extends Component {
	render() {
		return (
			<div>
				<img src={Map} className="RainMap" alt=""/>
			</div>
		);
	}
}

export default RainMap;