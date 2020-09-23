import React from 'react';
import img1 from '../images/1.jpg';
import img2 from '../images/2.jpg';
import img3 from '../images/3.jpg';
import img4 from '../images/4.jpg';
import img5 from '../images/5.jpg';
import img6 from '../images/6.jpg';
import img7 from '../images/7.jpg';
import img8 from '../images/8.jpg';
import { Container, Image } from 'react-bootstrap';

const HomeImages = () =>{
    const transitions = ["bounceIn", "fadeIn", "flipInX" , "flipInY","bounceInDown","bounceInLeft","bounceInRight","bounceInUp","fadeInDown","fadeInUp","fadeInRight","fadeInLeft","rotateIn","lightSpeedIn","rollIn","slideInUp","zoomIn"];
    return(
        <Container fluid>
            
                <h2 style={{color:"Yellow"}}>Welcome!</h2>
                {[img1,img2,img3,img4,img5,img6,img7,img8].map((item, index)=>
                        <Image src={item} key={index} rounded style={{width:"25%", margin:"2%"}} className={`animated ${transitions[Math.floor(Math.random()*transitions.length)]} hoverable`} />
                )}
        </Container>
    );
}

export default HomeImages;