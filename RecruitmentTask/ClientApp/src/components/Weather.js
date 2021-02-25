import React, { Component } from "react";

export class Weather extends Component {
  static displayName = Weather.name;

  constructor(props) {
    super(props);
    this.state = {
      forecasts: [
        {
          city: "Warsaw",
          countryCode: "PL",
          temperatureC: 0,
          temperatureF: 0,
          summary: "Hot"
        }
      ]
    };
  }

  static renderForecastsTable(forecasts) {
    return (
      <table className="table table-striped" aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>City</th>
            <th>Temp. (C?F?)</th>
            <th>Summary</th>
            <th>❄ / ~ / ☀</th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map(forecast => (
            <tr>
              <td>{forecast.city}</td>
              <td>
                {forecast.temperatureC}, {forecast.temperatureF}
              </td>
              <td>{forecast.summary}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  render() {
    return (
      <div>
        <h1 style={{ marginBottom: "4rem" }}>Weather forecast excersize</h1>
        {Weather.renderForecastsTable(this.state.forecasts)}
      </div>
    );
  }
}
