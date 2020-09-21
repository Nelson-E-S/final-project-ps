import React from 'react';
import { connect } from 'react-redux';
import { Container,Row,Col } from 'react-bootstrap';
import AnimalAccordion from '../components/AnimalAccordion';

const mapStateToProps = state =>({
    configState: state.configState
})

const AnimalCasePage = (props) =>{
    const { configState } = props;
    let animals = ['dog','cat','panda','fox','red_panda','koala','birb','racoon','kangaroo'];
    let numOfCols = [];
    numOfCols = [1,2,3];
    
    return(
        <Container>
            <Row>
                {numOfCols.map((item,index)=>
                    <Col key={index}>
                        <h4 style={{textAlign:'center'}}>{animals[item]} fact</h4>
                        <AnimalAccordion animal={animals[item]} numOfCards='3' />
                    </Col>
                )}
            </Row>
        </Container>
    );
}

export default connect(mapStateToProps)(AnimalCasePage);