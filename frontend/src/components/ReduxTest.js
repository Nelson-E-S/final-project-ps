import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state =>({
    configState: state.configState
})

const ReduxTest = props =>{
    const { configState } = props;
    return(
        <p>Active User Config: {configState.cookieFound?JSON.stringify(configState.user_config):JSON.stringify(configState.temp_config)}</p>
    )
}

export default connect(mapStateToProps)(ReduxTest);