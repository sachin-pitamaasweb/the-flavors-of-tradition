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
          <PhoneIcon className="icon" />
          <Card className="contact-card">
            <CardContent className='contact-card-content'>
              <h4 className='contact-info centered'>+91 9876543210</h4>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={3} md={3} lg={3}  className='custom-grid-contacts'>
          <LocationOnIcon className="icon" />
          <Card className="contact-card">
            <CardContent>
              <h4 className='contact-info centered'>Village, Waan, Faridkot Road, Ferozpur-Punjab-India</h4>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={3} md={3} lg={3}  className='custom-grid-contacts'>
          <MailIcon className="icon" />
          <Card className="contact-card">
            <CardContent>
              <h4 className='contact-info centered'>rajiv@mrmc.in</h4>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default ContactInfo;
