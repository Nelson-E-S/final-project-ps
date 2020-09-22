import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state =>({
    configState: state.configState
})

const ReduxTest = props =>{
    const { configState } = props;
    return(
        <p>Config State: {configState.cookieFound?configState.user_config:configState.temp_config}</p>
    )
}

export default connect(mapStateToProps)(ReduxTest);