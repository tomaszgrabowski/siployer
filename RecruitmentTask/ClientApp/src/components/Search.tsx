import React, { Dispatch, FC, FormEvent, SetStateAction } from 'react';
import { useDispatch } from 'react-redux';
import { setWeather } from '../store/weather/WeatherActions';

type SearchProps = {
    city: string;
    setCity: Dispatch<SetStateAction<string>>;
}

const Search: FC<SearchProps> = (props) => {
    const dispatch = useDispatch();
    const getWeather = ( event: FormEvent ) => {
        event.preventDefault();
        dispatch( setWeather( props.city ) );
        props.setCity('');
    };
    return (
        <form onSubmit={ getWeather }>
            <input type="text" value={ props.city } onChange={ ( event ) => props.setCity( event.target.value ) }/>
            <button type="submit">Search</button>
        </form>
    );
};

export default Search;
