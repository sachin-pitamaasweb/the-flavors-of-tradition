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


// import React, { useEffect } from 'react';
// import $ from 'jquery';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import 'slick-carousel/slick/slick';

// import '../style/Testimonials.css';
// import test1 from '../assets/images/test1.jpg';

// const Testimonials = () => {
//     useEffect(() => {
//         $(document).ready(function() {
//             $('.testimonials-slider').slick({
//                 dots: true,
//                 infinite: true,
//                 speed: 500,
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//                 autoplay: true,
//                 autoplaySpeed: 2000
//             });
//         });
//     }, []);

//     return (
//         <div className="testimonials-div">
//             <div className="testimonials-div1">
//                 <h3 className="testimonials-h3">TESTIMONIALS</h3>
//                 <h4 className="testimonials-h4">Glowing reviews from customers!</h4>
//             </div>
//             <div className="testimonials-img-div">
//                 <div className="testimonials-slider">
//                     <div className="testimonials-slider-2">
//                         <div className="testimonials-slider-2-images"><img src={test1} alt="user picture" className="testimonials-images" /></div>
//                         <h2 className="testimonials-h2">MEERA KAPOOR</h2>
//                         <p className="testimonials-p">MRMC FOODS has been our culinary lifeline. Their unwavering dedication to quality basmati rice varieties has elevated our dishes to new heights. As a chef, sourcing reliable ingredients is crucial, and MRMC consistently delivers. Their rice transports our customers to the heart of India with every bite. We're grateful for their partnership</p>
//                     </div>
//                     <div className="testimonials-slider-2">
//                         <div className="testimonials-slider-2-images"><img src={test1} alt="user picture" className="testimonials-images" /></div>
//                         <h2 className="testimonials-h2">MEERA KAPOOR</h2>
//                         <p className="testimonials-p">MRMC FOODS has been our culinary lifeline. Their unwavering dedication to quality basmati rice varieties has elevated our dishes to new heights. As a chef, sourcing reliable ingredients is crucial, and MRMC consistently delivers. Their rice transports our customers to the heart of India with every bite. We're grateful for their partnership</p>
//                     </div>
//                     <div className="testimonials-slider-2">
//                         <div className="testimonials-slider-2-images"><img src={test1} alt="user picture" className="testimonials-images" /></div>
//                         <h2 className="testimonials-h2">MEERA KAPOOR</h2>
//                         <p className="testimonials-p">MRMC FOODS has been our culinary lifeline. Their unwavering dedication to quality basmati rice varieties has elevated our dishes to new heights. As a chef, sourcing reliable ingredients is crucial, and MRMC consistently delivers. Their rice transports our customers to the heart of India with every bite. We're grateful for their partnership</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Testimonials;
