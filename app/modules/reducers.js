import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import {default as unicorns} from './unicornio/reducer';

export default combineReducers({
    routing: routerReducer,
    unicorns
});
