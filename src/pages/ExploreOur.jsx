import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '../style/ExploreOur.css';

import silder1 from '../assets/images/silder1.png';
import silder2 from '../assets/images/silder2.png';
import silder3 from '../assets/images/silder3.png';
import silder4 from '../assets/images/silder4.png';
import silder5 from '../assets/images/silder5.png';
import silder6 from '../assets/images/silder6.png';

import bgImage1 from '../assets/images/bg-image1.png';
import bgImage2 from '../assets/images/bg-image2.png';

const ExploreOur = () => {
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
        { src: silder1, alt: "Image 1" },
        { src: silder2, alt: "Image 2" },
        { src: silder3, alt: "Image 3" },
        { src: silder4, alt: "Image 4" },
        { src: silder5, alt: "Image 5" },
        { src: silder6, alt: "Image 6" },
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

    return (
        <div className="explore-our-div">
            <div className="side-img-div">
                <img src={bgImage1} alt="MRMC FOODS" className="img-fluid-side-image" />
            </div>
            <div className="explore-our-container-slider">
                <div className="explore-text-div">
                    <h1 className="explore-h1"> Explore our wide range </h1>
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
            <img src={bgImage2} alt="MRMC FOODS" className="img-fluid-side-image-left" />
            </div>
        </div>
    );
}

export default ExploreOur;

