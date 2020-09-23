import React from 'react';
import { Carousel } from 'react-bootstrap';
import ReactPlayer from 'react-player';

const HomeCarousel = () => {
    return(
        <Carousel controls={false} indicators={false} id="MyVC">
            <Carousel.Item>
            <ReactPlayer url='https://www.youtube.com/watch?v=Lq8bpo9KWa8' muted={true} loop={true} playing={true} style={{width:'100vw'}} />
            </Carousel.Item>
            <Carousel.Item>
            <ReactPlayer url='https://www.youtube.com/watch?v=1HygThMLzGs' muted={true} loop={true} playing={true} />
            </Carousel.Item>
            <Carousel.Item>
            <ReactPlayer url='https://www.youtube.com/watch?v=TYM2597Hmgk' muted={true} loop={true} playing={true} />
            </Carousel.Item>
        </Carousel>
    )
}

export default HomeCarousel;