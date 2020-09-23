import React, { Component } from 'react';
import axios from 'axios';
import { Card, Spinner } from 'react-bootstrap';

const CancelToken = axios.CancelToken;
const source = CancelToken.source();

class AnimalCard extends Component{
    constructor(props){
        super(props);
        const {animal} = props;
        this.state = {
            animal: animal,
            loading: false,
            errors: '',
            data: {}
        }
    }
    componentDidMount(){
        const query = `https://baconipsum.com/api/?type=meat-and-filler`;
        this.setState({
            loading: true
        });
        try{
            axios
                .get(query, {
                    cancelToken: source.token
                  })
                .then(res=>{
                    const data = res.data
                    this.setState({
                        loading: false,
                        data: data[0]
                    })
                }).catch(function (thrown) {
                    if (axios.isCancel(thrown)) {
                      console.log('Request canceled', thrown.message);
                    } else {
                      // handle error
                    }
                  });
        }catch(err){
            this.setState({
                loading: false,
                errors: err.message
            })
        }
    }
    render(){
        const { loading, errors, data, animal} = this.state;
        if(loading)
            return(
                <Card style={{width: '15rem', height: '3rem'}} className="mx-auto">
                    <Spinner animation="border" role="status" className="mx-auto">
                        <span className="sr-only">Loading image...</span>
                    </Spinner>
                </Card>
            );
        if(errors)
            return(
                <Card style={{width: '15rem'}} className="mx-auto">
                    <Card.Body>
                        <Card.Title>Error</Card.Title>
                        <Card.Text>Error loading card fact, reload to try again</Card.Text>
                    </Card.Body>
                </Card>
            );
        return(
            <Card style={{width: '15rem'}} className="mx-auto">
                <Card.Img variant='top' src="https://i.some-random-api.ml/y0MAvtbtkd.jpg" />
                <Card.Body>
                    <Card.Title>{animal} fact</Card.Title>
                    <Card.Text>{JSON.stringify(data)}</Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default AnimalCard;