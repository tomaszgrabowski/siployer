import { WeatherForecast } from '../../../models/WeatherForecast';
import { WeatherActions, WeatherActionsType } from './WeatherActions';

export type WeatherState = {
    weatherForecasts: readonly WeatherForecast[]
}

const initialWeatherState: WeatherState = {
    weatherForecasts: []
};

export const weatherReducer = ( state: WeatherState = initialWeatherState, action: WeatherActions ): WeatherState => {
    switch ( action.type ) {
        case WeatherActionsType.ADD_WEATHER:
            return {
                ...state,
                weatherForecasts: [...state.weatherForecasts, action.payload]
            };
        case WeatherActionsType.REMOVE_WEATHER:
            return {
                ...state,
                weatherForecasts: state.weatherForecasts.filter( item => item !== action.payload )
            };
        
        case WeatherActionsType.REMOVE_ALL_WEATHERS:
            return {
                ...state,
                weatherForecasts: []
            };
        default:
            return state;
    }
};
