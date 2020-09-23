import React from 'react';
import { Card, Accordion } from 'react-bootstrap';
import AnimalCard from './AnimalCard';

const AnimalAccordion = (props) =>{
    const { animal,numOfCards} = props;
    var indexArr;
    if (numOfCards === 3)
        indexArr = [1,2,3];
    if (numOfCards === 5)
        indexArr = [1,2,3,4,5];
    console.log(indexArr);
    
    return(
        <Accordion>
            {
                indexArr.map((item,index)=>
                    <Card key={index}>
                        <Accordion.Toggle as={Card.Header} eventKey={item}>
                            Click me!
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey={item}>
                            <Card.Body><AnimalCard animal={animal} /></Card.Body>
                        </Accordion.Collapse>
                    </Card>
                )
            }
        </Accordion>
    );
}
export default AnimalAccordion;