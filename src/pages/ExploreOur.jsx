import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '../style/ExploreOur.css';

import silder1 from '../assets/images/silder1.png';
import silder2 from '../assets/images/silder2.png';
import silder3 from '../assets/images/silder3.png';

const ExploreOur = () => {
    const [slidesToShow, setSlidesToShow] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 992) {
                setSlidesToShow(3);
            } else if (window.innerWidth >= 576) {
                setSlidesToShow(2);
            } else {
                setSlidesToShow(1); 
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const sliderImages = [
        { src: silder1, alt: "Image 1" },
        { src: silder2, alt: "Image 2" },
        { src: silder3, alt: "Image 3" }
    ];

    const settings = {
        infinite: true,
        autoplay: true,
        slidesToShow: slidesToShow,
        autoplaySpeed: 3000, 
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

    return (
        <div className="explore-our-div">
            <div className="explore-text-div">
                <h1 className="explore-h1"> Explore Our </h1>
            </div>
            <div className="explore-img-div" data-wow-delay="0.1s">
                <Slider className="slick-slider" {...settings}>
                    {sliderImages.map((image, index) => (
                        <div
                            key={index}
                            style={{
                                backgroundColor: 'rgba(221, 161, 94, 1)',
                                width: '472px',
                                height: '600px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: '20px'
                            }}
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
            <div className="explore-text-div">
                <h1 className="explore-h1"> Wide Range </h1>
            </div>
        </div>
    );
}

export default ExploreOur;

