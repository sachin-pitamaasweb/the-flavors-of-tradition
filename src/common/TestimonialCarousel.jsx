import React from "react";

import { Grid, Typography } from "@mui/material";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import '../style/TestimonialCarousel.css';

const TestimonialCarousel = ({ images }) => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    console.log(images[0].description.length);
    return (
        <>
            <Grid container className="testimonials-carousel-container" spacing={2}>
                <Grid item xs={12} className="testimonials-carousel-grid">
                    <Carousel responsive={responsive}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={3000}
                        removeArrowOnDeviceType={["tablet", "mobile"]}

                    >
                        {images.map((image, index) => (
                            <div className="testimonials-carousel" key={index}>

                                <div className="testimonials-img-div">
                                    <img src={image.src} alt={image.name} className="testimonials-img" />
                                </div>
                                <div className="testimonials-div-text">
                                    <Typography variant="h5" align="center" className="testimonials-h5">{image.name}</Typography>
                                    <Typography variant="subtitle1" align="center" className="testimonials-subtitle1">
                                        {image.description.length > 400 ? `${image.description.slice(0, 400)}...` : image.description}
                                    </Typography>

                                </div>
                            </div>
                        ))}
                    </Carousel>
                </Grid>
            </Grid>
        </>
    )
}
export default TestimonialCarousel;