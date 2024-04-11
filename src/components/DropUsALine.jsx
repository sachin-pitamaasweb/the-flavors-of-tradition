import React, { useState } from 'react';
import { Grid, TextField, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

import '../style/DropUsLine.css';

const DropUsALine = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        message: ''
    });
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');
    const [snackbarMessage, setSnackbarMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8000/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Failed to submit form');
            }

            // Reset form fields after successful submission
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                address: '',
                message: ''
            });

            // Show success message
            setOpenSnackbar(true);
            setSnackbarSeverity('success');
            setSnackbarMessage('Form submitted successfully');
        } catch (error) {
            console.error('Error submitting form:', error);
            // Show error message
            setOpenSnackbar(true);
            setSnackbarSeverity('error');
            setSnackbarMessage('Failed to submit form');
        }
    };



    return (
        <>
            <div className='drop-us-a-line-container'>
                <div className='drop-us-a-line-background-image'>
                    <img src={require('../assets/images/DropUsALine.png')} alt="drop-us-a-line" className='drop-us-a-line-img' />
                </div>
                <div className="drop-us-a-line">
                    <h2 className='drop-us-a-line-heading'>Drop us a line</h2>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6} sm={6} lg={6}>
                                <TextField
                                    label="firstName"
                                    variant="outlined"
                                    fullWidth
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} md={6} sm={6} lg={6}>
                                <TextField
                                    label="lastName"
                                    variant="outlined"
                                    fullWidth
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12}  md={6} sm={6} lg={6}>
                                <TextField
                                    label="Email"
                                    variant="outlined"
                                    fullWidth
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    
                                />
                            </Grid>
                            <Grid item xs={12} md={6} sm={6} lg={6}>
                                <TextField
                                    label="phone"
                                    variant="outlined"
                                    fullWidth
                                    id="phone"
                                    name="phone"
                                    type="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>

                            <Grid item xs={12} md={12} sm={12} lg={12}>
                                <TextField
                                    label="Address"
                                    variant="outlined"
                                    fullWidth
                                    id="address"
                                    name="address"
                                    multiline
                                    value={formData.address}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} md={12} sm={12} lg={12}>
                                <TextField
                                    label="Message"
                                    variant="outlined"
                                    fullWidth
                                    id="message"
                                    name="message"
                                    multiline
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </Grid>
                            <Grid item xs={12} className='drop-us-a-line-button-container'>
                                <button className='drop-us-a-line-button'>Send</button>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <div className='drop-us-a-line-bottom-bg-image'>
                    <img src={require('../assets/images/DropUsALineBottom.png')} alt="drop-us-a-line-bottom" className='drop-us-a-line-bottom-img' />
                </div>
            </div>
            <Snackbar
                open={openSnackbar}
                autoHideDuration={600}
                onClose={handleCloseSnackbar}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <MuiAlert
                    elevation={6}
                    variant="filled"
                    onClose={handleCloseSnackbar}
                    severity={snackbarSeverity}
                >
                    {snackbarMessage}
                </MuiAlert>
            </Snackbar>
        </>
    );
}

export default DropUsALine;
