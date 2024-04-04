import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '../style/Testimonials.css';

import test1 from '../assets/images/test1.jpg';

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '60px',
    };

    const testimonials = [
        { content: "Testimonial 1 content", author: "John Doe" },
        { content: "Testimonial 2 content", author: "Jane Smith" },
        { content: "Testimonial 3 content", author: "Alice Johnson" }
    ];

    return (
        <div className="testimonials-div">
            <div className="testimonials-div1">
                <h3 className="testimonials-h3">TESTIMONIALS</h3>
                <h4 className="testimonials-h4">Glowing reviews from customers!</h4>
            </div>
            <div className="testimonials-img-div">
                <div className="testimonials-slider">
                    <div className="testimonials-slider-2">
                        <div className="testimonials-slider-2-images"><img src={test1} alt="user picture" className="testimonials-images" /></div>
                        <h2 className="testimonials-h2">MEERA KAPOOR</h2>
                        <p className="testimonials-p">MRMC FOODS has been our culinary lifeline. Their unwavering dedication to quality basmati rice varieties has elevated our dishes to new heights. As a chef, sourcing reliable ingredients is crucial, and MRMC consistently delivers. Their rice transports our customers to the heart of India with every bite. We're grateful for their partnership</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
