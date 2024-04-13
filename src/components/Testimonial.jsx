import React from "react";
import { Grid, Typography } from '@mui/material';

import '../style/Testimonials.css';

import TestimonialCarousel from "../common/TestimonialCarousel";

import { testimonialsData } from '../Hepler.jsx';

const Testimonial = () => {
    return (
        <Grid container spacing={2} className="testimonials-container-grid">
            <Grid item xs={12} className="testimonials-grid">
                <Typography variant="h4" align="center" className="testimonials-h4">
                    TESTIMONIALS
                </Typography>
                <Typography variant="subtitle1" align="center" className="testimonials-subtitle">
                    Glowing reviews from customers
                </Typography>
            </Grid>
           <TestimonialCarousel 
           images={testimonialsData}
           />
        </Grid>
    );
};

export default Testimonial;
