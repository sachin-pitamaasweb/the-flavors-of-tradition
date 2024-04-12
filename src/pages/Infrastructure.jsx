import React from "react";
import { Grid } from '@mui/material';

// import InfrastructureImage from "../components/InfrastructureImage.jsx";
import InfrastructureText from "../components/InfrastructureText.jsx";
import InfrastructureProcessImages from '../components/InfrastructureProcessImages.jsx';

import HeroSection from "../common/HeroSection.jsx";

import '../style/Infrastructure.css';
import OurProcess from "../components/OurProcess.jsx";

const Infrastructure = () => {
    return(
        <>
        <Grid container className="infrastructure-container" spacing={2}>
            {/* <InfrastructureImage /> */}
            <HeroSection 
             imageSrc={require('../assets/images/Infrastructure.png')}
             text="Infrastructure"
             isStyled={true}
            />
            <InfrastructureText />
            <InfrastructureProcessImages />
            <OurProcess />

            <Grid item xs={12}>
                <div className="infrastructure-image-process">
                    <img src={require('../assets/images/pro.png')} alt="Infrastructure" className="infrastructure-process-img-1-process" />
                </div>
            </Grid>
            <Grid item xs={12}>
                <div className="infrastructure-image-process">
                    <img src={require('../assets/images/pro1.png')} alt="Infrastructure" className="infrastructure-process-img-1-process" />
                </div>
            </Grid>
        </Grid>
        </>
    )
}

export default Infrastructure;