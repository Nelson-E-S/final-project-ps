import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state =>({
    configState: state.configState
})

const ReduxTest = props =>{
    const { configState } = props;
    return(
        <p>Config State: {configState.user_config}</p>
    )
}

export default connect(mapStateToProps)(ReduxTest);