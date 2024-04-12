import React from "react";
import { Grid } from '@mui/material';


import '../style/OurMission.css';

const OurMission = () => {
    return (
            <Grid container spacing={2} className="mission-container">
                <Grid item xs={12}>
                    <h2 className="mission-title">Our Mission</h2>
                </Grid>
                <Grid item xs={12}>
                    <div className="mission-description">
                        <p className="mission-description-p">
                            At MRMC Foods, our mission is simple: to deliver premium rice products that exceed expectations.
                            We're committed to quality, sustainability, and creating memorable dining experiences for our customers worldwide.
                        </p>
                    </div>
                </Grid>
            </Grid>
    );
};

export default OurMission;
