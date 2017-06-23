import {UNICORN_CLICK} from './actions';

const initialState = () => {
    return {
        unicorns: '🦄'
    }
};

export default function reducer(state=initialState(), action={}){
    switch (action.type){
        case UNICORN_CLICK:
            return {...state, unicorns: state.unicorns + '🦄'}
        default:
            return initialState();
    }
}
