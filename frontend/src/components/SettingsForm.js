import React, { Component } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import axios from 'axios';
import { CONFIG_SET } from '../actions/configActions';

const mapStateToProps = state =>({
    configState: state.configState
})

class SettingsForm extends Component{
    constructor(props){
        super(props);
        const { dispatch, configState } = props;
        this.state = {
            loading: false,
            dispatch: dispatch,
            reduxState: configState,
            saveComplete: false
        }
        this.initRadio = this.initRadio.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }
    componentDidMount(){
        const { reduxState } = this.state;
        if(reduxState.cookieFound)
            this.initRadio(reduxState.user_config);
        else
            this.initRadio(reduxState.temp_config);
    }
    initRadio(config){
        switch(config.sets){
            case '3':
                document.getElementById('sets3').checked = true;
                break;
            case '5':
                document.getElementById('sets5').checked = true;
                break;
            default:
        }
        switch(config.items){
            case '3':
                document.getElementById('items3').checked = true;
                break;
            case '5':
                document.getElementById('items5').checked = true;
                break;
            default:
        }
    }
    submitHandler(e){
        e.preventDefault();
        const { reduxState, dispatch } = this.state;
        let setOpt;
        let itemOpt;
        document.querySelectorAll("[name='sets']").forEach((el)=>{
            if(el.checked)
                setOpt = el.value;
        });
        document.querySelectorAll("[name='items']").forEach((el)=>{
            if(el.checked)
                itemOpt = el.value;
        });
        if(reduxState.cookieFound){
            const { user_config } = reduxState;
            let newData = {"id":`${user_config.id}`,"sets":setOpt,"items":itemOpt};
            axios
                .put(`/api/user-configs/${reduxState.user_config.id}`,newData)
                .then(()=>dispatch({type:CONFIG_SET,payload:newData}))
                .then(()=>this.setState({saveComplete:true}))
                .catch(res=>console.log(res));
        }else{
            const { temp_config } = reduxState;
            let newData = {"id":`${temp_config.id}`,"sets":setOpt,"items":itemOpt};
            axios
                .post(`/api/user-configs`,newData)
                .then(()=>dispatch({type:CONFIG_SET,payload:newData}))
                .then(()=>this.setState({saveComplete:true}))
                .catch(res=>console.log(res));
        }
    }
    render(){
        const { reduxState } = this.state;
        return(
            <Form onSubmit={this.submitHandler}>
                <Form.Group as={Row} controlId="formUserID">
                    <Form.Label column sm={2}>
                        Your ID:
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control readOnly plaintext type="text" defaultValue={reduxState.cookieFound?reduxState.user_config.id:reduxState.temp_config.id} />
                    </Col>
                </Form.Group>
                <fieldset>
                    <Form.Group as={Row}>
                    <Form.Label as="legend" column sm={2}>
                        Sets Total
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Check
                        type="radio"
                        label="3"
                        name="sets"
                        id="sets3"
                        value="3"
                        />
                        <Form.Check
                        type="radio"
                        label="5"
                        name="sets"
                        id="sets5"
                        value="5"
                        />
                    </Col>
                    </Form.Group>
                </fieldset>
                <fieldset>
                    <Form.Group as={Row}>
                    <Form.Label as="legend" column sm={2}>
                        Items Total
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Check
                        type="radio"
                        label="3"
                        name="items"
                        id="items3"
                        value="3"
                        />
                        <Form.Check
                        type="radio"
                        label="5"
                        name="items"
                        id="items5"
                        value="5"
                        />
                    </Col>
                    </Form.Group>
                </fieldset>
                <Button type="submit">Save Settings</Button>
            </Form>
        );
    }
}

export default connect(mapStateToProps)(SettingsForm);