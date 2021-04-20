import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { preferencesReducer } from './preferences/PreferencesReducer';
import { weatherReducer } from './weather/WeatherReducer';

const rootReducer = combineReducers( {
    weather: weatherReducer,
    preferences: preferencesReducer
} );

export const store = createStore( rootReducer, composeWithDevTools( applyMiddleware( thunk ) ) );

export type AppState = ReturnType<typeof rootReducer>;
