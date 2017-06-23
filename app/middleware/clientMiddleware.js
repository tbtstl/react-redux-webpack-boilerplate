export default function clientMiddleware(client){
    return ({dispatch, getState}) => {
        return (next) => (action) => {
            if (typeof action === 'function'){
                return action(dispatch, getState)
            }

            const {promise, types, ...rest} = action;

            if(!promise){
                return next(action);
            }

            const [REQUEST, SUCCESS, FAILURE] = types;
            next({...rest, type:REQUEST});

            const actionPromise = promise(client);
            actionPromise.then(
                (content) => {
                    next({...rest, type: SUCCESS, content});
                },
                (error) => {
                    next({...rest, type: FAILURE, error});
                }
            ).catch((error)=>{
                next({...rest, error, type: FAILURE});
            });

            return actionPromise;
        }
    }
}
