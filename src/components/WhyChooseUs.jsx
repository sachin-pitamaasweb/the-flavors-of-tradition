import React from "react";

import { Grid } from '@mui/material';

import '../style/WhyChooseUs.css';

const WhyChooseUs = () => {
  return (
    <>
      <Grid container className="why-choose-us-container" spacing={2}>
        <Grid className="why-choose-us-image-text-grid" item xs={12} md={6} lg={6}>
          <div className="why-choose-us-text">
            <h4 className="why-choose-us-title">Why Choose Us?</h4>
            <p className="why-choose-us-p">
              MRMC FOODS: Quality Assurance, Global
              Reach. Exporting the Finest Basmati Rice
              Worldwide, Trusted by Infinite Customers.
            </p>
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <div className="why-choose-us-image">
            <img src={require('../assets/images/why-choose-us.png')} alt="MRMC FOODS" className="why-choose-us-img" />
          </div>
        </Grid>
      </Grid>
    </>
  )
}

export default WhyChooseUs;


