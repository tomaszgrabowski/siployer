import React, { FC } from 'react';
import styled from 'styled-components';
import { WeatherForecast } from '../../models/WeatherForecast';
import { getVisualTemperatureRepresentation } from '../hooks/helpers';
import { useWeatherForecast } from '../hooks/UseWeatherForecast';
import Search from './Search';

const Weather: FC = () => {
    const {
        city,
        setCity,
        weatherForecasts,
        handleRemoveWeatherRow,
        handleSort,
        clearTable,
        isFahrenheitScaleOn,
        switchScales
    } = useWeatherForecast();
    
    const renderForecastsTable = ( forecasts: readonly WeatherForecast[] ) => {
        return (<>
                <Header>
                    <Search city={ city } setCity={ setCity }/>
                    <button onClick={ switchScales }>Temperature switch</button>
                </Header>
                
                <table className="table table-striped" aria-labelledby="tabelLabel">
                    <thead>
                    <tr>
                        <th onClick={ () => handleSort( 'city' ) }>↕️City</th>
                        <th onClick={ () => handleSort( 'temperature' ) }>↕️Temp. { isFahrenheitScaleOn ? `F` : `C` }</th>
                        <th onClick={ () => handleSort( 'summary' )}>Summary</th>
                        <th onClick={ () => handleSort( 'visual' )}>❄ / ~ / ☀</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    { forecasts.map( ( forecast, index ) => (
                        <tr key={ forecast.city + index }>
                            <td>{ forecast.city } / { forecast.countryCode }</td>
                            <td>
                                { isFahrenheitScaleOn ? forecast.temperatureF : forecast.temperatureC }
                            </td>
                            <td>{ forecast.summary }</td>
                            <td>
                                { getVisualTemperatureRepresentation( forecast.temperatureC ).map( ( item ) =>
                                    <span key={ Math.random() }>{ item }</span> ) }
                            </td>
                            <td>
                                <button onClick={ () => handleRemoveWeatherRow( forecast ) }>Remove row</button>
                            </td>
                        </tr>
                    ) ) }
                    </tbody>
                </table>
                <Footer>
                    <button onClick={ clearTable }>Clear table</button>
                </Footer>
            </>
        );
    };
    
    return (
        <div>
            <h1 style={ { marginBottom: '4rem' } }>Weather forecast excersize</h1>
            { weatherForecasts && renderForecastsTable( weatherForecasts ) }
        </div>
    );
};

export default Weather;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    width: 100%;
`;

const Footer = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
`;
