import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <Box sx={{ textAlign: 'center', marginTop: '76px', marginBottom: '100px' }}>
            <Typography variant="h1" color="error" gutterBottom>
                404
            </Typography>
            <Typography variant="h4" gutterBottom>
                Oops! Page not found
            </Typography>
            <Typography variant="body1" gutterBottom>
                The page you are looking for might have been removed or doesn't exist.
            </Typography>
            <Button
                component={Link}
                to="/"
                variant="contained"
                color="primary"
                sx={{
                    height: '50px',
                    width: '160px',
                    backgroundColor: 'rgba(221, 161, 94, 1)',
                    border: 'none',
                    borderRadius: '16px',
                    color: 'white',
                    fontSize: '23px',
                    lineHeight: '19px',
                    '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 1)',
                        color: 'rgba(221, 161, 94, 1)'
                    }
                }}
            >
                Go to Home
            </Button>
        </Box>
    );
};

export default PageNotFound;
