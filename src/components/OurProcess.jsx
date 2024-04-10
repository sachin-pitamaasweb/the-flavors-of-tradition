import React from "react";
import { Grid } from '@mui/material';
import '../style/OurProcess.css';

import OurProcessImageForMobile from "./OurProcessImageForMobile";

const OurProcess = () => {
    const renderItems = () => {
        if (window.innerWidth <= 576) {
            return (
                <>
                    <OurProcessImageForMobile />
                </>
            )
        } else {
            return (
                <>  
                    <Grid item xs={12} sm={12} md={12}>
                        <div className="process-item">
                            <img src={require('../assets/images/process.png')} alt="Process 1" className="process-img" />
                        </div>
                    </Grid>
                </>
            )
        }
    }
    return (
        <div className="product-process">
            <Grid container spacing={5} className="product-process-container">
                <Grid item xs={12} sm={12} md={12}>
                    <div className="our-process-text">
                        <h2 className="our-process-heading">Our Process</h2>
                    </div>
                </Grid>
                {/* <Grid item xs={12} sm={6} md={12}>
                    <div className="process-item">
                        <img src={require('../assets/images/process.png')} alt="Process 1" className="process-img" />
                    </div>
                </Grid> */}
                {renderItems()}

            </Grid>
        </div>
    )
}
export default OurProcess;
