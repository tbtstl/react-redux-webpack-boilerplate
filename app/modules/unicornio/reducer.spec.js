import reducer from './reducer';
import * as types from './actions';

describe('unicorn reducer', ()=>{
    const expectedInitialState = {
        unicorns: '🦄'
    };

    it('should return the initial state', ()=> {
        expect(
            reducer(undefined, {})
        ).toEqual(expectedInitialState);
    });

    it('should make more 🦄 when UNICORN_CLICK is dispatched', ()=>{
        const expectedState = {
            unicorns: '🦄🦄'
        };
        expect(
            reducer(undefined, {type: types.UNICORN_CLICK})
        ).toEqual(expectedState);
    });
});
