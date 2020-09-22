import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cookies from 'universal-cookie';
import { CONFIG_SET } from '../actions/configActions';
import axios from 'axios';

const mapStateToProps = state =>({
    configState: state.configState
})

class HomePage extends Component {
    constructor(props){
        super(props);
        const { dispatch, configState } = props;
        this.state = {
            loading: false,
            dispatch: dispatch,
            reduxState: configState
        }
    }
    componentDidMount(){
        const { reduxState } = this.state;
        let query = '/api/user-configs/{id}'
        const cookies = new Cookies();
        let date = new Date();
        let days = 1;
        date.setTime(date.getTime()+(days*24*60*60*1000));
        if(cookies.get('my-facts-app')===undefined){
            cookies.set('my-facts-app',reduxState.temp_config, { path: '/', expires: date});
        }else{
            const { id } = cookies.get('my-facts-app');
            query = query.replace('{id}',id)
            axios
                .get(query)
                .then(res=>{
                    const data = res.data;
                    console.log(data);
                    this.state.dispatch({
                        type:CONFIG_SET,
                        payload: {"id":`${data.id}`,"sets":`${data.sets}`,"items":`${data.items}`}
                    })
                }).catch(res=>{
                    console.log(res)
                });
            
        };
    }
    render(){
        const cookies = new Cookies();
        return(
            <p>testing...</p>
        );
    }
}

export default connect(mapStateToProps)(HomePage);