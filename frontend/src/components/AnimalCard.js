import React, { Component } from 'react';
import axios from 'axios';
import { Card, Spinner } from 'react-bootstrap';

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
        const { animal } = this.state;
        const query = `https://cors-anywhere.herokuapp.com/http://some-random-api.ml/animal/${animal}`;
        this.setState({
            loading: true
        });
        try{
            axios
                .get(query)
                .then(res=>{
                    const data = res.data
                    this.setState({
                        loading: false,
                        data: data
                    })
                })
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
                <Card style={{width: '10rem'}} className="mx-auto">
                    <Spinner animation="border" role="status" className="mx-auto">
                        <span className="sr-only">Loading image...</span>
                    </Spinner>
                </Card>
            );
        if(errors)
            return(
                <Card style={{width: '10rem'}} className="mx-auto">
                    <Card.Body>
                        <Card.Title>Error</Card.Title>
                        <Card.Text>Error loading card fact, reload to try again</Card.Text>
                    </Card.Body>
                </Card>
            );
        return(
            <Card style={{width: '10rem'}}>
                <Card.Img variant='top' src={data.image} />
                <Card.Body>
                    <Card.Title>{animal} fact</Card.Title>
                    <Card.Text>{data.fact}</Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default AnimalCard;