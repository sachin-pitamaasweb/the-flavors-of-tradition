import React from 'react';
import Grid from '@mui/material/Grid';

import '../style/ValuesAndPhilosophy.css';

import Quality from '../common/Quality';



const ValuesAndPhilosophy = () => {
    return (
        <Grid container spacing={2} className='values-and-philosophy'>
            <Grid item xs={12}>
                <div className='values-and-philosophy-title'>
                    <h2 className='values-and-philosophy-heading'>Values and Philosophy</h2>
                </div>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12} className='values-and-philosophy-content'>
                <Quality
                applyAnimation={false}
                />
            </Grid>
        </Grid>
    );
};

export default ValuesAndPhilosophy;
