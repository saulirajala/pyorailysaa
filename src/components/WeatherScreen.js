import React, { Component } from 'react';
import Main from './Main';
import Header from './Header';
import RainMap from './RainMap';
import Footer from './Footer';
import Logo from '../bicycle.svg';

class WeatherScreen extends Component {
  render() {
    return (
      <div className="App">
        <Header
          title={'Pyöräilysää'}
          logo={Logo}
          subtitle={this.props.match.params.place}
        />
        <Main place={this.props.match.params.place} />
        <RainMap />
        <Footer />
      </div>
    );
  }
}

export default WeatherScreen;
