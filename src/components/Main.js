import React, { Component } from 'react';
import Column from './Column';
import { parseString } from 'xml2js';

/**
 * tuulen nopeus
 * Tuulen suunta
 * lämpötila
 * sateen todennäköisyys
 *
 */
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      windSpeed: '',
      windDirection: '',
      temperature: '',
      clouds: ''
    };
  }

  componentDidMount() {
    let place = this.props.place;
    fetch(
      'http://data.fmi.fi/fmi-apikey/0cafbc8d-c52c-4c09-aae0-2e15a22f7265/wfs?request=getFeature&storedquery_id=fmi::forecast::hirlam::surface::point::timevaluepair&parameters=Temperature,WindSpeedMS,TotalCloudCover,WindDirection&place=' +
        place
    ).then(
      result => {
        if (!result.ok) {
          this.saveToState(false);
          return;
        }
        result.text().then(str => {
          parseString(
            str,
            function(err, result) {
              let results = result['wfs:FeatureCollection']['wfs:member'];
              this.saveToState(results);
            }.bind(this)
          );
        });
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      error => {
        console.log(error);
        this.setState({
          isLoaded: true,
          error
        });
      }
    );
  }

  saveToState(results) {
    if (!results) {
      this.setState({
        isLoaded: true,
        error: { message: 'Väärä paikkakunta' }
      });
      return;
    }
    let temperature =
      results[0]['omso:PointTimeSeriesObservation'][0]['om:result'][0][
        'wml2:MeasurementTimeseries'
      ][0]['wml2:point'][0]['wml2:MeasurementTVP'][0]['wml2:value'][0];
    let windspeedmsTime =
      results[1]['omso:PointTimeSeriesObservation'][0]['om:result'][0][
        'wml2:MeasurementTimeseries'
      ][0]['wml2:point'][0]['wml2:MeasurementTVP'][0]['wml2:time'][0];
    let windspeedmsValue =
      results[1]['omso:PointTimeSeriesObservation'][0]['om:result'][0][
        'wml2:MeasurementTimeseries'
      ][0]['wml2:point'][0]['wml2:MeasurementTVP'][0]['wml2:value'][0];
    let totalCloudCoverage =
      results[2]['omso:PointTimeSeriesObservation'][0]['om:result'][0][
        'wml2:MeasurementTimeseries'
      ][0]['wml2:point'][0]['wml2:MeasurementTVP'][0]['wml2:value'][0];
    let windDirection =
      results[3]['omso:PointTimeSeriesObservation'][0]['om:result'][0][
        'wml2:MeasurementTimeseries'
      ][0]['wml2:point'][0]['wml2:MeasurementTVP'][0]['wml2:value'][0];
    this.setState({
      isLoaded: true,
      windSpeed: windspeedmsValue,
      windDirection: windDirection,
      temperature: temperature,
      clouds: totalCloudCoverage,
      rainProbability: '',
      time: windspeedmsTime
    });
  }

  render() {
    if (this.state.error) {
      return <div>Virhe: {this.state.error.message}</div>;
    }

    if (!this.state.isLoaded) {
      return <div>Loading...</div>;
    }
    let string_ke = 'moi';
    let totuus = false;
    if (string_ke === totuus) {
      console.log('mo');
    }

    let time = new Date(this.state.time);
    return (
      <div>
        <h3>{time.toLocaleString('fi-FI')}</h3>
        <h1 />
        <div className={'row'}>
          <Column
            className={'column'}
            title={'Tuulen nopeus'}
            text={this.state.windSpeed + ' m/s'}
          />
          <Column
            className={'column'}
            title={'Tuulen suunta'}
            text={this.state.windDirection}
          />
        </div>
        <div className={'row'}>
          <Column
            className={'column'}
            title={'Lämpötila'}
            text={this.state.temperature + ' °C'}
          />
          <Column
            className={'column'}
            title={'Pilvien peitto'}
            text={this.state.clouds + '%'}
          />
        </div>
      </div>
    );
  }
}

export default Main;
