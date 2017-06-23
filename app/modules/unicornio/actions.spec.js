import * as actions from './actions';

describe('🦄 actions', () => {
    it('should return an object with UNICORN_CLICK type', ()=>{
        const expectedAction = {
            type: actions.UNICORN_CLICK
        };

        expect(actions.unicornio()).toEqual(expectedAction);
    })
});
