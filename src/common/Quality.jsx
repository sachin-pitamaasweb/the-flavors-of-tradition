import React from "react";
import { Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import '../style/Quality.css';

const Quality = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

    const QualityImageStyle = {
        display: 'flex',
        justifyContent: 'space-around',
        gap: '20px',
        marginTop: '50px',
        marginBottom: '50px',
        padding: '0px',
    };

    // const QualityImage = {
    //     width: isMobile ? '70%' : '90%',
    //     marginLeft: '60px',
    // };

    return (
        <>
            <div className="quality">
                <div className="quality-image-container">
                    <div className="quality-image-text" style={QualityImageStyle}>
                        <Grid container spacing={isMobile ? 2 : 0}>
                            <Grid item xs={6} sm={6} md={6} lg={3}>
                                <div>
                                    <img src={require("../assets/images/Quality1.png")} alt="quality" className="quality-image" />
                                    <h4 className="quality-h4">Uncompromising <br />Quality</h4>
                                </div>
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} lg={3}>
                                <div>
                                    <img src={require("../assets/images/Quality2.png")} alt="quality" className="quality-image" />
                                    <h4 className="quality-h4">Diverse Varieties</h4>
                                </div>
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} lg={3}>
                                <div>
                                    <img src={require("../assets/images/Quality3.png")} alt="quality" className="quality-image" />
                                    <h4 className="quality-h4">Trusted Reputation</h4>
                                </div>
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} lg={3}>
                                <div>
                                    <img src={require("../assets/images/Quality4.png")} alt="quality" className="quality-image" />
                                    <h4 className="quality-h4">Customer-Centric</h4>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Quality;
