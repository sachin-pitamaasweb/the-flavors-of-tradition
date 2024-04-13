import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { carouselItemsforMobile, carouselItemsforDesktop } from '../Hepler.jsx';

import '../style/ImageCarousel.css';

const ExampleCarouselImage = ({ src, alt }) => {
    return (
        <img
            className="d-block w-100"
            src={src}
            alt={alt}
            style={{ objectFit: 'contain', height: 'auto' }}
        />
    );
};

const ImageCarousel = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // const bgTextStyle = {
    //     width: '30%',
    //     marginTop: '-720px',
    //     marginLeft: '-1271px',
    //     animation: 'swing 2s infinite alternate'
    // };

    const carouselDivStyle = {
        position: 'relative',
        zIndex: '-1',
        marginTop: '0px'
    };

    const getCarouselItems = () => {
        if (windowWidth <= 768) {
            return (
                <Carousel style={carouselDivStyle} className='carousel'>
                    {carouselItemsforMobile.map((item, index) => (
                        <Carousel.Item key={index} interval={300000}>
                            <ExampleCarouselImage src={item.src} alt={item.alt} />
                            {index == 0 && (
                                <Carousel.Caption className='carousel-caption'>
                                    <img src={require('../assets/images/bg-text.png')} alt="bg-text" className='bg-text-image-for-mobile' />
                                </Carousel.Caption>
                            )}
                        </Carousel.Item>
                    ))}
                </Carousel>
            );
        } else {
            return (
                <Carousel style={carouselDivStyle} className='carousel'>
                    {carouselItemsforDesktop.map((item, index) => (
                        <Carousel.Item key={index} interval={3000000}>
                            <ExampleCarouselImage src={item.src} alt={item.alt} />
                            <Carousel.Caption className='carousel-caption'>
                                    <img src={require('../assets/images/bg-text.png')} alt="bg-text"  className='bg-text-image-web' />
                                </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            );
        }
    };

    return getCarouselItems();
};

export default ImageCarousel;
