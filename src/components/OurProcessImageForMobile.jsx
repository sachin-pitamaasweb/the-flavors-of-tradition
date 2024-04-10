import React from 'react';
import { Grid } from '@mui/material';

import '../style/OurProcessImageForMobile.css';

const OurProcessImageForMobile = () => {
    // Define an array containing objects with image paths and corresponding text
    const processSteps = [
        { image: 'Pre-Cleaning.png', text: 'Pre-Cleaning' },
        { image: 'Parboiling.png', text: 'Parboiling' },
        { image: 'De-Stone.png', text: 'De-Stone' },
        { image: 'Husking.png', text: 'Husking' },
        { image: 'HuskAspiration.png', text: 'Husking Aspiration' },
        { image: 'PaddySeparation.png', text: 'Paddy Separation' },
        { image: 'Whitening.png', text: 'Weighing & Bagging' },
        { image: 'Polishing.png', text: 'Polishing' },
        { image: 'Sorting&Grading.png', text: 'Sorting & Grading' },
        { image: 'Weighing&Bagging.png', text: 'Weighing & Bagging' },
    ];

    return (
        <>
            <Grid container className="our-process-image-for-mobile" spacing={2}>
                {/* Map over the processSteps array to generate grid items dynamically */}
                {processSteps.map((step, index) => (
                    <Grid item xs={12} md={12} sm={12} lg={12} key={index}>
                        <div className="our-process-image">
                            <img src={require(`../assets/images/${step.image}`)} alt={step.text} className="our-process-img-mobile" />
                        </div>
                        <div className="our-process-text"> {/* Add text below images */}
                            <h5>{step.text}</h5>
                        </div>
                        {processSteps.length - 1 !== index && (
                            <div className="arrow-container">
                                <img src={require('../assets/images/arrow.png')} alt="Arrow" className="arrow-img" />
                            </div>
                        )}

                    </Grid>
                ))}
            </Grid>
        </>
    );
}

export default OurProcessImageForMobile;
