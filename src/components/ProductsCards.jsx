import React from 'react';
import { Grid, Card, Typography } from '@mui/material';

import '../style/ProductCard.css';

import { products } from '../Hepler.jsx';

const ProductsCards = () => {

    return (
        <Grid container spacing={2}  className="custom-container">
            {products.map((product, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card className='custom-grid-item'>
                        <div className='card-image'>
                            <img src={product.imageUrl} alt={product.name} className ="card-image-img" style={{ marginTop: '10px', objectFit: 'contain' }} />
                        </div>
                        <div style={{ padding: '10px' }}>
                            <Typography variant="h6" style={{ color: '#fff', textAlign: 'center', marginTop:"10px" }}>
                                {product.name}
                            </Typography>
                        </div>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default ProductsCards;
