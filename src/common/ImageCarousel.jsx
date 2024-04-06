import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useMediaQuery } from '@react-hook/media-query';


const ExampleCarouselImage = ({ src, alt }) => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    return (
        <img
            className="d-block w-100"
            src={src}
            alt={alt}
            height={isMobile ? 400 : 600}
        />
    );
};

const ImageCarousel = () => {
    const carouselItems = [
        { src: require('../assets/images/Carousel-Image.png')},
        { src: require('../assets/images/Carousel-Image.png')},
        { src: require('../assets/images/Carousel-Image.png')}
    ];
    const BgText = {
        width: '30%',
        marginTop: '-720px',
        marginLeft: '-1271px',
        animation: 'swing 2s infinite alternate'
    }

    const carouselDiv = {
        position: 'relative',
       zIndex: '-1',
       marginTop: '0px'
    }
    return (
        <Carousel style={carouselDiv}>
            {carouselItems.map((item, index) => (
                <Carousel.Item key={index} interval={3000}>
                    <ExampleCarouselImage src={item.src} alt={item.alt} />
                    <Carousel.Caption>
                    <img src={require('../assets/images/bg-text.png')} alt="bg-text"  style={BgText} className='bg-text-image' /> 
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default ImageCarousel;