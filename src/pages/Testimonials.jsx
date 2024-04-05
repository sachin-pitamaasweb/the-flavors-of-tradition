/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

import '../style/Testimonials.css';

import { testimonialsData } from '../Hepler.jsx';

const Testimonials = () => {



    return (
        <div className="testimonials-div">
            <div className="testimonials-div1">
                <h3 className="testimonials-h3">TESTIMONIALS</h3>
                <h4 className="testimonials-h4">Glowing reviews from customers!</h4>
            </div>
            <div className="testimonials-img-div">
                <div className="testimonials-slider">
                    {testimonialsData.map(testimonial => (
                        <div key={testimonial.id} className="testimonials-slider-2">
                            <div className="testimonials-slider-2-images"><img src={testimonial.imageUrl} alt="user picture" className="testimonials-images" /></div>
                            <h2 className="testimonials-h2">{testimonial.name}</h2>
                            <p className="testimonials-p">{testimonial.description}</p>
                        </div>
                    ))}
                </div>
            </div>


        </div>
    );
}

export default Testimonials;



