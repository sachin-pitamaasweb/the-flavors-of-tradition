import React, { useState } from 'react';
import { Grid, TextField, Button } from '@mui/material';

import '../style/DropUsLine.css';

const DropUsALine = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here (e.g., send form data to backend)
        console.log(formData);
        // Reset form fields after submission
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            message: ''
        });
    };

    return (
        <>
        <div className='drop-us-a-line-container'>
            <div className='drop-us-a-line-background-image'>
                <img src={require('../assets/images/DropUsALine.png')} alt="drop-us-a-line" className='drop-us-a-line-img' />
            </div>
        <div className="drop-us-a-line">
            <h2>Drop us a line</h2>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={6}>
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
                    <Grid item xs={12} lg={6}>
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
                    <Grid item xs={12} lg={6}>
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
                    <Grid item xs={12}>
                        <TextField
                            label="Email"
                            variant="outlined"
                            fullWidth
                            id="email"
                            name="email"
                            multiline
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
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
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary">Submit</Button>
                    </Grid>
                </Grid>
            </form>
        </div>
        </div>
      
        </>
    );
}

export default DropUsALine;
