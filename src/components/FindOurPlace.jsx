import React from "react";

import { Grid } from '@mui/material';

import '../style/FindOurPlace.css';

import { googleMap } from "../Hepler";

const FindOurPlace = () => {
    return (
        <>
            <Grid container className="find-our-place-container" spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={12} className="find-our-place-content">
                    <div className="find-our-place">
                        <h2 className="find-our-place-heading">Find Our Place</h2>
                        <div className="find-container">
                            <iframe className="responsive-iframe" src={googleMap} title="Google Map"></iframe>
                        </div>

                    </div>

                </Grid>
            </Grid>
        </>
    )
}
export default FindOurPlace;


