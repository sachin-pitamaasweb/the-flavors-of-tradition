import React from 'react';
import { Grid, Card, CardContent } from '@mui/material';

import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import '../style/ContactInfo.css';

const ContactInfo = () => {
  return (
    <>
      <Grid container spacing={2} className="contacts-container">
        <Grid item xs={12} sm={3} md={3} lg={3} className='custom-grid-contacts'>
         <div className='icon-div'>  <PhoneIcon className="icon" /></div>
          <Card className="contact-card">
            <CardContent className='contact-card-content'>
            <a  style={{ textDecoration: 'none'}} href="tel:+91 9876543210"> <h4 className='contact-info centered'>+91 9876543210</h4></a>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={3} md={3} lg={3}  className='custom-grid-contacts'>
        <div className='icon-div'>  <LocationOnIcon className="icon" /></div>
          <Card className="contact-card">
            <CardContent className='contact-card-content'>
             <a style={{ textDecoration: 'none'}} href="https://www.google.com/maps/place/Feroz+Punjab/@30.8307583,74.0780589,17z/data=!3m1!4b1!4m5!3m4!1s0x3918f5d8b9b0b8b1:0x5c7d6e2e6a5e2b8d!8m2!3d30.8307577!4d74.0802476"> <h4 className='contact-info centered'>Village, Waan, Faridkot Road, Ferozpur-Punjab-India</h4></a>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={3} md={3} lg={3}  className='custom-grid-contacts'>
        <div className='icon-div'>    <MailIcon className="icon" /></div>
          <Card className="contact-card">
            <CardContent className='contact-card-content'>
              <a style={{ textDecoration: 'none'}} href="mailto:rajiv@mrmc.in"><h4 className='contact-info centered'>rajiv@mrmc.in</h4></a>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default ContactInfo;
