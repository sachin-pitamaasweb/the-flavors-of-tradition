import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Grid } from "@mui/material";
import '../style/ProductCarousel.css';

const ProductCarousel = ({ images }) => {
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

    return (
        <Grid container className="product-carousel-container" spacing={2}>
            <Grid item xs={12} className="product-carousel-grid">
                <Carousel responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    
                >
                    {images.map((image, index) => (
                        <div key={index} className="product-carousel">
                            <img src={image.src} alt={image.alt} className="product-img" />
                        </div>
                    ))}
                </Carousel>
            </Grid>
        </Grid>
    )
}

export default ProductCarousel;
