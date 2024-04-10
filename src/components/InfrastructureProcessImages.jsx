import React from "react";
import { Grid } from '@mui/material';

import '../style/InfrastructureProcessImages.css';

const InfrastructureProcessImages = () => {
    return (
        <div className="infrastructure-process-images">
            <Grid container spacing={2} className="infrastructure-process-images-container"> 
                <Grid item xs={12} md={4} sm={4} lg={4}> 
                    <div className="infrastructure-process-image">
                        <img src={require('../assets/images/InfrastructureProcess1.png')} alt="Infrastructure" className="infrastructure-process-img-1" />
                    </div>
                </Grid>
                <Grid item xs={12} md={4} sm={4} lg={4}> 
                    <div className="infrastructure-process-image">
                        <img src={require('../assets/images/InfrastructureProcess2.png')} alt="Infrastructure" className="infrastructure-process-img-1" /> {/* Changed image source */}
                    </div>
                </Grid>
                <Grid item xs={12} md={4} sm={4} lg={4}> 
                    <div className="infrastructure-process-image">
                        <img src={require('../assets/images/InfrastructureProcess3.png')} alt="Infrastructure" className="infrastructure-process-img-1" /> {/* Changed image source */}
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
export default InfrastructureProcessImages;
