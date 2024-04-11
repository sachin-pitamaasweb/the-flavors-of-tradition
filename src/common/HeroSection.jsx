import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import '../style/Infrastructure.css';

const HeroSection = ({ imageSrc, text }) => {
    const [visited, setVisited] = useState(false);

    useEffect(() => {
        const isVisited = localStorage.getItem('visited');
        if (isVisited) {
            setVisited(true);
        } else {
            localStorage.setItem('visited', 'true');
        }
    }, []);

    return(
        <>
            <Grid item xs={12} className={`infrastructure-grids ${visited ? 'visited' : ''}`}>
                <div className="infrastructure-grid">
                    <div className="infrastructure-overlay">
                        <div className="infrastructure-image">
                            <img
                                src={imageSrc}
                                alt={text}
                                className="infrastructure-img"
                            />
                        </div>
                        <div className="overlay-content">
                            <h3 className="infrastructure-text">{text}</h3>
                        </div>
                    </div>
                </div>
            </Grid>
        </>
    );
};

export default HeroSection;
