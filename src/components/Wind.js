import React, { Component } from 'react';

import { parseString } from 'xml2js';

/**
 * * näyttää tuulen nopeuden ja suunnan
 */
class Wind extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch(
      'http://data.fmi.fi/fmi-apikey/0cafbc8d-c52c-4c09-aae0-2e15a22f7265/wfs?request=getFeature&storedquery_id=fmi::observations::weather::timevaluepair&place=palokka&parameters=temperature,windspeedms,winddirection&starttime=2018-05-01T11:00:00Z&timestep=15'
    ).then(
      result => {
        result.text().then(str => {
          let results = parseString(
            str,
            function(err, result) {
              let results = result['wfs:FeatureCollection']['wfs:member'];
              let windspeedmsTime =
                results[1]['omso:PointTimeSeriesObservation'][0][
                  'om:result'
                ][0]['wml2:MeasurementTimeseries'][0]['wml2:point'][0][
                  'wml2:MeasurementTVP'
                ][0]['wml2:time'][0];
              let windspeedmsValue =
                results[1]['omso:PointTimeSeriesObservation'][0][
                  'om:result'
                ][0]['wml2:MeasurementTimeseries'][0]['wml2:point'][0][
                  'wml2:MeasurementTVP'
                ][0]['wml2:value'][0];
              let windDirection =
                results[2]['omso:PointTimeSeriesObservation'][0][
                  'om:result'
                ][0]['wml2:MeasurementTimeseries'][0]['wml2:point'][0][
                  'wml2:MeasurementTVP'
                ][0]['wml2:value'][0];
              console.log(windDirection);
              this.setState({
                isLoaded: true,
                windspeedms: [windspeedmsTime, windspeedmsValue],
                winddirection: windDirection
              });
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

  render() {
    const { error, isLoaded } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    }
    if (!isLoaded) {
      return <div>Loading...</div>;
    }

    return (
      <div className={'row'}>
        <div className="column">
          <h3>Tuulen nopeus</h3>
          <p>{this.state.windspeedms[1]} m/s</p>
        </div>
        <div className="column">
          <h3>Tuulen suunta</h3>
          <p>{this.state.winddirection}</p>
        </div>
      </div>
    );
  }
}

export default Wind;
