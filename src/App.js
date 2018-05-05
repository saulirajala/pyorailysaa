import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';
import WeatherScreen from './components/WeatherScreen';

/**
 * Pyöräilysää
 * näyttää tuulen nopeuden ja suunnan
 * näyttää lämpötilan
 * näyttää sateen todennäköisyyden
 * näyttää sadekartan
 * Kaksi välilehteä: aamu ja iltapäivä tai ehkä nyt ja 8h päästä
 *
 * * Header
 * * Main
 *  * Column
 * * Map
 * * Footer
 */
class App extends Component {
	render() {
		return (
			<Switch>
				<Route path='/:place' component={WeatherScreen}/>
				<Route component={SplashScreen}/>
			</Switch>
		);
	}
}

export default App;
