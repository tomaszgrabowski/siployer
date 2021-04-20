import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SortableHeader } from '../../models/SortBy';
import { WeatherForecast } from '../../models/WeatherForecast';
import { AppState } from '../store/AppState';
import { setSortBy } from '../store/preferences/PreferencesActions';
import { PreferencesState } from '../store/preferences/PreferencesReducer';
import { removeAllWeathers, removeWeather } from '../store/weather/WeatherActions';
import { WeatherState } from '../store/weather/WeatherReducer';


export const useWeatherForecast = () => {
    const dispatch = useDispatch();
    const [city, setCity] = useState( '' );
    const [isFahrenheitScaleOn, setIsFahrenheitScaleOn] = useState( false );
    const { weatherForecasts } = useSelector<AppState, WeatherState>( state => state.weather );
    const { sortBy } = useSelector<AppState, PreferencesState>( state => state.preferences );
    const handleRemoveWeatherRow = ( item: WeatherForecast ) => dispatch( removeWeather( item ) );
    const clearTable = () => dispatch( removeAllWeathers() );
    const handleSort = ( item: SortableHeader ) => {
        dispatch( setSortBy( item ) );
    };
    const switchScales = () => setIsFahrenheitScaleOn( !isFahrenheitScaleOn );
    const sortedWeathers = () => {
        switch ( sortBy.type ) {
            case 'city':
                const citySortedArray = [...weatherForecasts].sort( ( a, b ) => a.city.localeCompare( b.city ) );
                return sortBy.asc ? citySortedArray : citySortedArray.reverse();
            case 'temperature':
            case 'visual':
                const temperatureSortedArray = [...weatherForecasts].sort( ( a, b ) => a.temperatureC - b.temperatureC );
                return sortBy.asc ? temperatureSortedArray : temperatureSortedArray.reverse();
            case 'summary':
                const summarySortedArray = [...weatherForecasts].sort();
                return sortBy.asc ? summarySortedArray : summarySortedArray.reverse();
            default:
                return [...weatherForecasts];
        }
    };
    
    return {
        city,
        setCity,
        weatherForecasts: sortedWeathers(),
        handleRemoveWeatherRow,
        handleSort,
        clearTable,
        isFahrenheitScaleOn,
        switchScales
    };
};
