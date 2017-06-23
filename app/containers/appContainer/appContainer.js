import {connect} from 'react-redux';

import {App} from 'components';
import {unicornio} from 'modules/unicornio';

const mapStateToProps = (state) => {
    return {
        unicorns: state.unicorns.unicorns
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onUnicornClick: () => {
            dispatch(unicornio())
        }
    }
};

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);


export default AppContainer;
