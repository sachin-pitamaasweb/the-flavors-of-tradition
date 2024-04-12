import React from 'react';
import { Grid } from '@mui/material';

import '../style/FoundingStory.css';

const FoundingStory = () => {
    return (
        <Grid container spacing={2} className='founding-story'>
            {/* Left Column */}
            <Grid item xs={12} sm={6}>
                <div className='founding-story-left'>
                    <h2 className='founding-story-heading'>Founding Story</h2>
                    <p className='founding-story-p'>
                        Welcome to MRMC Foods, your premier destination for premium rice products. With a rich heritage and a commitment to quality,
                        we bring you the finest rice varieties, carefully cultivated and processed to perfection. From farm to table,
                        we uphold sustainable practices to ensure each grain maintains its purity and nutritional value. Join us in creating
                        memorable dining experiences that nourish the body and soul. Choose MRMC Foods for excellence in every grain.
                       <p className='founding-story-p'>
                       Welcome to MRMC Foods, your premier destination for premium rice products. With a rich heritage and a commitment to quality,
                        we bring you the finest rice varieties, carefully cultivated and processed to perfection. From farm to table,
                        we uphold sustainable practices to ensure each grain maintains its purity and nutritional value. Join us in creating
                        memorable dining experiences that nourish the body and soul. Choose MRMC Foods for excellence in every grain.
                       </p>
                    </p>

                </div>
            </Grid>

            {/* Right Column */}
            <Grid item xs={12} sm={6}>
                <div className='founding-story-right'>
                    <img src={require('../assets/images/founding-story.png')} alt='Founding Story' className='founding-story-img' />
                </div>
            </Grid>
        </Grid>
    );
};

export default FoundingStory;
