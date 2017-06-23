import React from 'react'
import {Route} from 'react-router-dom';

import {
    AppContainer
} from 'containers';

export default function routes(){
    return (
        <div>
            <Route path="/" component={AppContainer}></Route>
        </div>
    )
}
