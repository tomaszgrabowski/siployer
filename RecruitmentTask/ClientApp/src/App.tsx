import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import './custom.css';
import Home from './components/Home';
import Layout from './components/Layout';
import Weather from './components/Weather';
import { store } from './store/AppState';

const App: FC = () => {
    return (
        <Provider store={ store }>
            <Layout>
                <Route exact path="/" component={ Home }/>
                <Route path="/weather" component={ Weather }/>
            </Layout>
        </Provider>
    );
};

export default App;
