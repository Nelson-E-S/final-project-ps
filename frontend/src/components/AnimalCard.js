import React, { Component } from 'react';
import axios from 'axios';
import { Card, Spinner } from 'react-bootstrap';
import img1 from '../images/1.jpg';
import img2 from '../images/2.jpg';
import img3 from '../images/3.jpg';
import img4 from '../images/4.jpg';
import img5 from '../images/5.jpg';
import img6 from '../images/6.jpg';
import img7 from '../images/7.jpg';
import img8 from '../images/8.jpg';

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
        const images = [img1,img2,img3,img4,img5,img6,img7,img8];
        return(
            <Card style={{minWidth:"170px"}} className="mx-auto">
                <Card.Img variant='top' src={images[Math.floor(Math.random()*images.length)]} />
                <Card.Body>
                    <Card.Title>{animal} fact</Card.Title>
                    <Card.Text>{JSON.stringify(data)}</Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default AnimalCard;