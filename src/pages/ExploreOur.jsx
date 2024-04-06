import React, { useEffect, useState } from "react";

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '../style/ExploreOur.css';

const ExploreOur = () => {

    const theme = useTheme();
    const [slidesToShow, setSlidesToShow] = useState(4);
    const [showArrows, setShowArrows] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 992) {
                setSlidesToShow(4);

                setShowArrows(true);
            } else if (window.innerWidth >= 576) {
                setSlidesToShow(2);
                setShowArrows(true);
            } else {
                setSlidesToShow(1);
                setShowArrows(false);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const sliderImages = [
        { src: require('../assets/images/slider1.png'), alt: "Image 1" },
        { src: require('../assets/images/slider2.png'), alt: "Image 2" },
        { src: require('../assets/images/slider3.png'), alt: "Image 3" },
        { src: require('../assets/images/slider4.png'), alt: "Image 4" },
        { src: require('../assets/images/slider5.png'), alt: "Image 5" }
    ];

    const settings = {
        infinite: true,
        autoplay: true,
        slidesToShow: slidesToShow,
        autoplaySpeed: 3000,
        arrows: showArrows,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    const isLargeDesktop = useMediaQuery(theme.breakpoints.up('lg'));
    const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
    const isTablet = useMediaQuery(theme.breakpoints.up('md'));
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    
    const ExploreH1 = {
        fontSize: isLargeDesktop ? '48px' : isDesktop ? '38px' : isTablet ? '25px' : isMobile ? '25px' : '25px',
        letterSpacing: isLargeDesktop ? '30px' : isDesktop ? '10px' : isTablet ? '5px' : isMobile ? '5px' : '5px',
    }

    return (
        <div className="explore-our-div">
            <div className="side-img-div">
                <img src={require('../assets/images/bg-image1.png')} alt="MRMC FOODS" className="img-fluid-side-image" />
            </div>
            <div className="explore-our-container-slider">
                <div className="explore-text-div">
                    <h1 className="explore-h1" style={ExploreH1}> Explore our wide range </h1>
                </div>
                <div className="explore-img-div" data-wow-delay="0.1s">
                    <Slider className="slick-slider" {...settings}>
                        {sliderImages.map((image, index) => (
                            <div
                                key={index}
                            >
                                <div className="explore-img-div1">
                                    <div className="explore-img-div2">
                                        <img src={image.src} alt={image.alt} style={{ maxWidth: '80%', maxHeight: '80%' }} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
            <div className="left-side-div">
                <img src={require('../assets/images/bg-image2.png')} alt="MRMC FOODS" className="img-fluid-side-image-left" />
            </div>
        </div>
    );
}

export default ExploreOur;

