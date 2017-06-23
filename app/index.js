import $ from 'jquery';
import ReactDOM from 'react-dom';

import {Base} from 'components';

$(document).ready(function(){
    ReactDOM.render(
        <Base/>,
        document.getElementById('root')
    )
});
