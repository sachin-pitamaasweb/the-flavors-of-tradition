import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import '../style/Testimonials.css';

import { testimonialsData } from '../Hepler.jsx';

const Testimonial = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
    const isTablet = useMediaQuery(theme.breakpoints.up('sm'));
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
    const isLargeDesktop = useMediaQuery(theme.breakpoints.up('lg'));

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 20000,
        responsive: [
            {
                breakpoint: 1024 || 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768 || 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480 || 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    const TestimonialH3 = {
        fontSize: isLargeDesktop ? '48px' : isDesktop ? '48px' : isTablet ? '30px' : isMobile ? '25px' : '25px',
        letterSpacing: isLargeDesktop ? '20px' : isDesktop ? '20px' : isTablet ? '1.5px' : isMobile ? '5px' : '5px',
    }

    const TestimonialH4 = {
        fontSize: isLargeDesktop ? '112px' : isDesktop ? '112px' : isTablet ? '20px' : isMobile ? '34px' : '34px',
        
    }

    const TestimonialDiv = {
        marginTop: isLargeDesktop ? '-200px' : isDesktop ? '-200px' : isTablet ? '50px' : isMobile ? '50px' : '50px',
    }

    const TestimonialPara = {
        fontSize: isLargeDesktop ? '18px' : isDesktop ? '18px' : isTablet ? '15px' : isMobile ? '13px' : '13px',
        paddingLeft: isLargeDesktop ? '40px' : isDesktop ? '40px' : isTablet ? '20px' : isMobile ? '0px' : '0px',
        paddingRight: isLargeDesktop ? '40px' : isDesktop ? '40px' : isTablet ? '20px' : isMobile ? '0px' : '0px',
    }

    const TestimonialSliderInner = {
        width: isLargeDesktop ? '500px !important' : isDesktop ? '500px !important' : isTablet ? '300px' : isMobile ? '425px !important' : '425px !important',
        height: isLargeDesktop ? '370px !important' : isDesktop ? '370px !important' : isTablet ? '300px' : isMobile ? '309px !important' : '309px !important',
    }

    const TestimonialSlider = {
        paddingLeft: isLargeDesktop ? '60px' : isDesktop ? '60px' : isTablet ? '40px' : isMobile ? '1px' : '1px',
        paddingRight: isLargeDesktop ? '40px' : isDesktop ? '40px' : isTablet ? '20px' : isMobile ? '0px' : '0px',
        overFlow: isLargeDesktop ? 'hidden' : isDesktop ? 'hidden' : isTablet ? 'hidden' : isMobile ? '' : '',
    }


    return (
        <div className="testimonials-div" style={TestimonialDiv}>
            <div className="testimonials-div1">
                <h3 className="testimonials-h3" style={TestimonialH3}>TESTIMONIALS</h3>
                <h4 className="testimonials-h4" style={TestimonialH4}>Glowing reviews from customers!</h4>
            </div>
            <div className='testimonials-img-div'>
                <div className='testimonials-slider'>
                    <Slider {...settings}  className="testimonials-slider" style={TestimonialSlider} >
                        {testimonialsData.map((testimonial, index) => (
                          <div>
                              <div key={index} className='testimonials-slider-inner' style={TestimonialSliderInner} >
                              <div className="testimonials-slider-2">
                                    <img src={testimonial.imageUrl} alt="User" className="user-image"  />
                                  
                                </div>
                                <h2 className="testimonials-h2">{testimonial.name}</h2>
                                <p className="testimonials-p" style={TestimonialPara}>{testimonial.description}</p>
                            </div>
                          </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;


