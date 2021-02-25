import React, { Component } from "react";

export class Weather extends Component {
  static displayName = Weather.name;

  constructor(props) {
    super(props);
    this.state = { forecasts: [], loading: true };
  }

  componentDidMount() {
    this.populateWeatherData();
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
    let contents = this.state.loading ? (
      <p>
        <em>Loading...</em>
      </p>
    ) : (
      Weather.renderForecastsTable(this.state.forecasts)
    );

    return (
      <div>
        <h1 style={{ marginBottom: "4rem" }}>Weather forecast excersize</h1>
        {contents}
      </div>
    );
  }

  async populateWeatherData() {
    const response = await fetch("weatherforecast");
    const data = await response.json();
    this.setState({ forecasts: data, loading: false });
  }
}
