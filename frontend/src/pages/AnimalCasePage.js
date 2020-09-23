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
    let numOfItems = 0;
    if(configState.cookieFound){
        for(let i = 1; i<=Number(configState.user_config.sets);i++)
            numOfCols.push(i);
        numOfItems = Number(configState.user_config.sets);
    }else{
        for(let i = 1; i<=Number(configState.temp_config.sets);i++)
            numOfCols.push(i);
        numOfItems = Number(configState.temp_config.sets);
    }
    
    return(
        <Container fluid>
            {numOfCols.map((item,index)=>
                <Row key={index} className="content">
                    <Col>
                        <h4 style={{textAlign:'center'}}>{animals[item]} fact</h4>
                        <AnimalAccordion animal={animals[item]} numOfCards={numOfItems} />
                    </Col>
                </Row>
            )}
        </Container>
    );
}

export default connect(mapStateToProps)(AnimalCasePage);