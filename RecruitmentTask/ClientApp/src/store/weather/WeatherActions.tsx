import axios from 'axios';
import { Dispatch } from 'redux';
import { API_URL } from '../../config';
import { Action } from '../../../models/Action';
import { WeatherForecast } from '../../../models/WeatherForecast';

export enum WeatherActionsType {
    ADD_WEATHER = '[Weather] Weather Added',
    REMOVE_WEATHER = '[Weather] Weather Removed',
    REMOVE_ALL_WEATHERS = '[Weather] All Weathers Removed',
}

export const setWeather = ( city: string ) => async ( dispatch: Dispatch ): Promise<void> => {
    const response = await axios.get<WeatherForecast>( `${ API_URL }/WeatherForecast/${ city }` );
    dispatch( addWeather( response.data ) );
};

export const addWeather = ( weatherForecast: WeatherForecast ): Action => ({
    type: WeatherActionsType.ADD_WEATHER as WeatherActionsType.ADD_WEATHER,
    payload: weatherForecast
});

export const removeWeather = ( weatherForecast: WeatherForecast ): Action => ({
    type: WeatherActionsType.REMOVE_WEATHER as WeatherActionsType.REMOVE_WEATHER,
    payload: weatherForecast
});

export const removeAllWeathers = (): Action => ({
    type: WeatherActionsType.REMOVE_ALL_WEATHERS as WeatherActionsType.REMOVE_ALL_WEATHERS
});


export type WeatherActions = ReturnType<typeof addWeather>;
