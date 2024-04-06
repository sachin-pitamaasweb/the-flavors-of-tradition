import React from "react";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';

import '../style/Heritage.css';

const Heritage = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
    const isTablet = useMediaQuery(theme.breakpoints.up('sm'));
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
    const isLargeDesktop = useMediaQuery(theme.breakpoints.up('lg'));

    const heritageSpanStyle = {
        fontFamily: 'Libre Baskerville',
        fontSize: isDesktop ? '48px' : isTablet ? '38px' : isMobile ? '25px' : '25px',
        letterSpacing: isDesktop ? '30px' : isTablet ? '10px' : '5px',
        color: '#316C2F',
        fontWeight: 'bold',
    };

    const heritageH3Style = {
        fontFamily: 'Libre Baskerville',
        fontSize: isLargeDesktop ? '125px' : isDesktop ? '2.5rem' : isTablet ? '50px' : isMobile ? '22px' : '22px',
        letterSpacing: isLargeDesktop ? '2px' : isDesktop ? '1.5px' : isTablet ? '1px' : '0.5px',
        color: '#316C2F',
        marginBottom: '-0.5rem'
    };

    const heritageImageStyle = {
        marginTop: isLargeDesktop ? '-300px' : isDesktop ? '-300px' : isTablet ? '0px' : isMobile ? '0px' : '0px',
        marginLeft: isLargeDesktop ? '450px' : isDesktop ? '450px' : isTablet ? '0px' : '0px',
        position: 'relative',
        left: '0px',
        top: isLargeDesktop ? '0px' : isDesktop ? '0px' : isTablet ? '0px' : isMobile ? '-120px' : '-120px',
        zIndex: '-1',
        width: isLargeDesktop ? '' : isDesktop ? '' : isTablet ? '' : isMobile ? '100%' : '100%',
        display: isLargeDesktop ? 'flex' : isDesktop ? 'flex' : isTablet ? 'flex' : isMobile ? 'none' : 'none',
    }

    const heritageImageStyleDiv = {
        marginTop: isLargeDesktop ? '-1016px' : isDesktop ? '-1016px' : isTablet ? '0px' : isMobile ? '0px' : '0px',
        display: isLargeDesktop ? 'flex' : isDesktop ? 'flex' : isTablet ? 'flex' : isMobile ? 'block' : 'block',
    }

    const heritageParaStyle = {
        fontSize: isLargeDesktop ? '47px' : isDesktop ? '18px' : isTablet ? '14px' : isMobile ? '25px' : '25px',
        lineHeight: isLargeDesktop ? '72px' : isDesktop ? '18px' : isTablet ? '14px' : isMobile ? '35px' : '35px',
        marginTop: isLargeDesktop ? '0px' : isDesktop ? '0px' : isTablet ? '0px' : isMobile ? '-63px' : '-63px',
        marginLeft: isLargeDesktop ? '0px' : isDesktop ? '0px' : isTablet ? '0px' : isMobile ? '30px' : '30px',
    }

    const heritageImageStyleMain = {
        width: isLargeDesktop ? '100%' : isDesktop ? '100%' : isTablet ? '100%' : isMobile ? '100%' : '100%',
        height: isLargeDesktop ? '100%' : isDesktop ? '100%' : isTablet ? '100%' : isMobile ? '100%' : '100%',
        marginTop: isLargeDesktop ? '0px' : isDesktop ? '0px' : isTablet ? '0px' : isMobile ? '-60px' : '-60px',
        marginLeft: isLargeDesktop ? '0px' : isDesktop ? '0px' : isTablet ? '0px' : isMobile ? '10px' : '10px',
    }


    const heritageBtn = {
        display: isLargeDesktop ? 'flex' : isDesktop ? 'flex' : isTablet ? 'flex' : isMobile ? 'flex' : 'flex',
        justifyContent: 'center',
        marginLeft: isLargeDesktop ? '609px' : isDesktop ? '609px' : isTablet ? '0px' : isMobile ? '0px' : '0px',
        marginTop: isLargeDesktop ? '-99px' : isDesktop ? '-99px' : isTablet ? '0px' : isMobile ? '0px' : '0px',
        marginBottom: '100px',
    };
    

    return (
        <div className="heritage">
            <div className="heritage-text-div">
                <div className="heritage-text">
                    <span className="heritage-span">
                        <Typography variant="h6" sx={heritageSpanStyle}>OUR HERITAGE</Typography>
                    </span>
                    <Typography variant="h3" sx={heritageH3Style}>Taste the Essence of Excellence with MRMC Foods</Typography>
                </div>
            </div>
            <div className="heritage-img-text">
                    <div className="heritage-img-bg-div">
                        <img className="heritage-img" style={heritageImageStyle} src={require('../assets/images/bg-image6.png')} alt="heritage" />
                    </div>
                <div className="heritage-img-text-div" style={heritageImageStyleDiv}>
                    <img className="heritage-img2" style={heritageImageStyleMain} src={require('../assets/images/heritage.png')} alt="heritage" />
                    <p className="heritage-p" style={heritageParaStyle}>Established in 2013, MRMC FOODS PRIVATE LIMITED is situated in the village Haan,
                        ferozpur, Punjab. We are an ISO 22000: 2005, ISO 9001: 2008, HACCP FSSAI, and GOVT.
                        RECOGNIZED STAR EXPORT HOUSE (RICE MILLERS & EXPORTERS) certified company.
                        Our office and mills are equipped with the most futuristic machinery.
                        With 10 years of experience in the rice business,
                        which is a necessary food for half of the world's population,
                        our vision is to provide aromatic Indian basmati and non-basmati rice to people worldwide.
                    </p>
                </div>
                <div className="heritage-btn" style={heritageBtn}>
                    <button className="heritage-button">Know More</button>
                </div>
            </div>
        </div>
    );
};

export default Heritage;
