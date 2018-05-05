import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main'
import RainMap from './components/RainMap';
import Footer from './components/Footer';
import Logo from './bicycle.svg';

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
			<div className="App">
				<Header title={'Pyöräilysää'} logo={Logo} subtitle={'Jyväskylä, Palokka'}/>
				<Main />
				<RainMap />
				<Footer />
			</div>
		);
	}
}

export default App;
