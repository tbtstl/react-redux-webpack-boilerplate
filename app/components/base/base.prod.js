import React from 'react';
import {Provider} from 'react-redux';
import {routerMiddleware, ConnectedRouter} from 'react-router-redux';
import {createStore as _createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';

import {ApiClient, routes} from 'shared';
import {clientMiddleware} from 'middleware';

const Base = () => {
    const createStore = (history) => {
        const client = new ApiClient();
        const data = window.__data;
        const reduxRouterMiddleware = routerMiddleware(history);

        const middleware = [clientMiddleware(client), reduxRouterMiddleware, thunk];

        const enhancer = compose(
            applyMiddleware(...middleware)
    );

        const reducer = require('modules/reducers').default;

        return _createStore(reducer, data, enhancer);
    };

    const history = createHistory();
    const store = createStore(history);

    return (
        <Provider store={store} key="provider">
        <ConnectedRouter history={history}>
        {routes()}
        </ConnectedRouter>
        </Provider>
);
};

export default Base;
