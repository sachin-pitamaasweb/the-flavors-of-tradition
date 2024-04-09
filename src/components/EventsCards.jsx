import React from 'react';
import { Grid } from '@mui/material';

import '../style/EventsCards.css';

const EventsCards = () => {
    return (
        <>
            <Grid container spacing={2} className="custom-container-events">
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <img src={require('../assets/images/event4.png')} alt="event1" style={{ width: '100%', objectFit: 'contain' }} />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <img src={require('../assets/images/event3.png')} alt="event1" style={{ width: '100%', objectFit: 'contain' }} />
                </Grid>
                <Grid item xs={12} sm={8} md={8} lg={8}>
                    <img src={require('../assets/images/event2.png')} alt="event1" style={{ width: '100%', objectFit: 'contain' }} />
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                    <img src={require('../assets/images/event1.png')} alt="event1" style={{ width: '100%', height: '85%', objectFit: 'contain' }} />
                </Grid>
            </Grid>
        </>
    )

}

export default EventsCards;