import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import useMediaQuery from '@mui/material/useMediaQuery';



import { carouselItemsforMobile, carouselItemsforDesktop } from '../Hepler.jsx';

import '../style/ImageCarousel.css';

const ExampleCarouselImage = ({ src, alt }) => {
    const isMobile = useMediaQuery('(max-width: 768px)');
    return (
        <img
            className="d-block w-100"
            src={src}
            alt={alt}
{/*             height={isMobile ? 400 : 600} */}
           style={{ objectFit: contain, height: "auto" }}
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

    const bgTextStyle = {
        width: '30%',
        marginTop: '-720px',
        marginLeft: '-1271px',
        animation: 'swing 2s infinite alternate'
    };

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
                        <Carousel.Item key={index} interval={3000}>
                            <ExampleCarouselImage src={item.src} alt={item.alt} />
                            <Carousel.Caption className='carousel-caption'>
                                <img src={require('../assets/images/bg-text.png')} alt="bg-text" className='bg-text-image-for-mobile' /> 
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            );
        } else {
            return (
                <Carousel style={carouselDivStyle} className='carousel'>
                    {carouselItemsforDesktop.map((item, index) => (
                        <Carousel.Item key={index} interval={3000}>
                            <ExampleCarouselImage src={item.src} alt={item.alt} />
                            <Carousel.Caption>
                                <img src={require('../assets/images/bg-text.png')} alt="bg-text"  style={bgTextStyle} className='bg-text-image' /> 
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
