import React from "react";

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import '../style/WhyChooseUs.css';

const WhyChooseUs = () => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
    const isTablet = useMediaQuery(theme.breakpoints.up('sm'));
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
    const isLargeDesktop = useMediaQuery(theme.breakpoints.up('lg'));


const WhyChooseUsContent ={
  marginLeft: isLargeDesktop ? '100px' : isDesktop ? '0px' : isTablet ? '0px' : isMobile ? '0px' : '0px',
  paddingLeft: isLargeDesktop ? '30px' : isDesktop ? '0px' : isTablet ? '0px' : isMobile ? '0px' : '0px',
  textAlign: isLargeDesktop ? 'left' : isDesktop ? 'left' : isTablet ? 'left' : isMobile ? 'center' : 'center',

}
const imgFluid = {
  marginLeft: isLargeDesktop ? '1000px' : isDesktop ? '1000px' : isTablet ? '0px' : isMobile ? '0px' : '0px',
  width: isLargeDesktop ? '' : isDesktop ? '100%' : isTablet ? '100%' : isMobile ? '100%' : '100%',
  marginTop: isLargeDesktop ? '-570px' : isDesktop ? '-570px' : isTablet ? '50px' : isMobile ? '-10px' : '-10px',
}

const WhyChooseUsTitle = {
  fontSize: isLargeDesktop ? '112px' : isDesktop ? '112px' : isTablet ? '50px' : isMobile ? '25px' : '25px',
}

const WhyChooseUsP = {
  fontSize: isLargeDesktop ? '40px' : isDesktop ? '40px' : isTablet ? '20px' : isMobile ? '18px' : '18px',
  lineHeight: isLargeDesktop ? '60px' : isDesktop ? '60px' : isTablet ? '20px' : isMobile ? '25px' : '25px',
  wordSpacing: isLargeDesktop ? '10px' : isDesktop ? '10px' : isTablet ? '5px' : isMobile ? '0px' : '0px',
  textAlign: isLargeDesktop ? 'left' : isDesktop ? 'left' : isTablet ? 'left' : isMobile ? 'center' : 'center',
  marginTop: isLargeDesktop ? '50px' : isDesktop ? '50px' : isTablet ? '20px' : isMobile ? '12px' : '12px',
}

    return (
      <section className="why-choose-us">
      <div className="why-choose-us-container">
        <div className="why-choose-us-content" style={WhyChooseUsContent}>
          <sapn className="why-choose-us-title" style={WhyChooseUsTitle}>Why Choose Us?</sapn>
          <p className="why-choose-us-p" style={WhyChooseUsP}>
            "MRMC FOODS: Quality Assurance, Global<br />
            Reach. Exporting the Finest Basmati Rice<br />
            Worldwide, Trusted by Infinite Customers."
          </p>
        </div>
        <div className="why-choose-us-image">
          <img src="images/why-choose-us.png" alt="MRMC FOODS" className="img-fluid-why" style={imgFluid}/>
        </div>
      </div>
    </section>
    )
}

export default WhyChooseUs;