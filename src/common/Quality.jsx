import React from "react";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import '../style/Quality.css';

const Quality = () => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
    const isTablet = useMediaQuery(theme.breakpoints.up('sm'));
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
    const isLargeDesktop = useMediaQuery(theme.breakpoints.up('lg'));

const QualityImageStyle={
    display: isLargeDesktop ? 'flex' : isDesktop ? 'flex' : isTablet ? 'flex' : isMobile ? 'block' : 'block',
    justifyContent: isLargeDesktop ? 'space-around' : isDesktop ? 'space-around' : isTablet ? 'space-around' : isMobile ? 'center' : 'center',
    gap: isLargeDesktop ? '50px' : isDesktop ? '50px' : isTablet ? '30px' : isMobile ? '20px' : '20px',
    marginTop: isLargeDesktop ? '100px' : isDesktop ? '100px' : isTablet ? '50px' : isMobile ? '50px' : '50px',
    marginBottom: isLargeDesktop ? '100px' : isDesktop ? '100px' : isTablet ? '50px' : isMobile ? '50px' : '50px',
    padding: isLargeDesktop ? '0px' : isDesktop ? '0px' : isTablet ? '0px' : isMobile ? '0px' : '0px',
}

const QualityImage = {
    width: isLargeDesktop ? '100%' : isDesktop ? '100%' : isTablet ? '100%' : isMobile ? '70%' : '70%',
    marginLeft: isLargeDesktop ? '0px' : isDesktop ? '0px' : isTablet ? '0px' : isMobile ? '60px' : '60px',
}


    return (
        <>
            <div className="quality">
                <div className="quality-image-container">
                    <div className="quality-image-text" style={QualityImageStyle}>
                        <div>
                            <img src={require("../assets/images/Quality1.png")} alt="quality" className="quality-image" style={QualityImage}/>
                            <h4 className="quality-h4">Uncompromising Quality</h4>
                        </div>
                        <div>
                            <img src={require("../assets/images/Quality2.png")} alt="quality" className="quality-image"   style={QualityImage}/>
                            <h4 className="quality-h4">Diverse Varieties</h4>
                        </div>
                        <div>
                            <img src={require("../assets/images/Quality3.png")} alt="quality" className="quality-image"  style={QualityImage} />
                            <h4 className="quality-h4">Trusted Reputation</h4>
                        </div>
                        <div>
                            <img src={require("../assets/images/Quality4.png")} alt="quality" className="quality-image"  style={QualityImage} />
                            <h4 className="quality-h4">Customer-Centric</h4>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Quality;