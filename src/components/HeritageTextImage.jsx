import React from "react";
import { Grid } from "@mui/material";

import '../style/HeritageTextImage.css';

const HeritageTextImage = () => {
    return (

        <>
            <Grid container className="heritage-text-image-container" spacing={2}>
                <div className="heritage-background-image"></div>
                <Grid className="heritage-text-image-grid" item xs={12} sm={12} md={6} lg={6}>
                    <div className="heritage-image-div-text">
                        <img src={require('../assets/images/heritage.png')} alt="heritage" className="heritage-image-img" />
                    </div>
                </Grid>
                <Grid className="heritage-text-image-grid-1" item xs={12} sm={12} md={6} lg={6}>
                    <div className="heritage-image-div-text-1">
                        <p className="heritage-image-p-text">
                            Established in 2013, MRMC FOODS PRIVATE LIMITED is situated in the village Haan, ferozpur,
                            Punjab. We are an ISO 22000: 2005, ISO 9001: 2008, HACCP FSSAI,
                            and GOVT. RECOGNIZED STAR EXPORT HOUSE (RICE MILLERS & EXPORTERS) certified company.
                            Our office and mills are equipped with the most futuristic machinery.
                            With 10 years of experience in the rice business, which is a necessary food for half of the world's population,
                            our vision is to provide aromatic Indian basmati and non-basmati rice to people worldwide.
                        </p>
                    </div>
                </Grid>
                <Grid className="heritage-btn-grid" item xs={12}>
                    <button className="heritage-button">Know More</button>
                </Grid>
            </Grid>
        </>
    )
}

export default HeritageTextImage