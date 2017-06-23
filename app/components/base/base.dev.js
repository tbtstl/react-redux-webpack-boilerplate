import React from 'react';
import {Provider} from 'react-redux';
import {routerMiddleware, ConnectedRouter} from 'react-router-redux';
import {createStore as _createStore, applyMiddleware, compose} from 'redux';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';

import {DevTools} from 'components';
import {ApiClient, routes} from 'shared';
import {clientMiddleware} from 'middleware';

const Base = () => {
    const createStore = (history) => {
        const client = new ApiClient();
        const data = window.__data;
        const reduxRouterMiddleware = routerMiddleware(history);

        const middleware = [clientMiddleware(client), reduxRouterMiddleware, thunk];

        const enhancer = compose(
            applyMiddleware(...middleware),
            DevTools.instrument()
        );

        const reducer = require('modules/reducers').default;

        const store = _createStore(reducer, data, enhancer);

        if (module.hot) {
            module.hot.accept('modules/reducers', () => {
                store.replaceReducer(require('modules/reducers'));
            });
        }

        return store;
    };

    const history = createHistory();
    const store = createStore(history);

    return (
        <Provider store={store} key="provider">
            <div>
                <ConnectedRouter history={history}>
                    {routes()}
                </ConnectedRouter>
                <DevTools/>
            </div>
        </Provider>
    );
};

export default Base;
