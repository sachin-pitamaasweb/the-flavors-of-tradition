import React from "react";
import { List, ListItem, ListItemText, Typography } from "@mui/material";
import { Link } from "react-router-dom"; 

import '../style/QuickLinks.css';

const QuickLinks = () => {
    return (
        <div className="quick-links">
          
            <List>
            <Typography variant="h6" gutterBottom className="quick-links-title-typo">
                Quick Links
            </Typography>
                <ListItem button component={Link} to="/" className="quick-links-items">
                    <Typography className="quick-links-text">Home</Typography>
                </ListItem>
                <ListItem button component={Link} to="/about" className="quick-links-items">
                    <Typography className="quick-links-text">About</Typography>
                </ListItem>
                <ListItem button component={Link} to="/products" className="quick-links-items">
                    <Typography className="quick-links-text">Products</Typography>
                </ListItem>
                <ListItem button component={Link} to="/events" className="quick-links-items">
                    <Typography className="quick-links-text">Events</Typography>
                </ListItem>
                <ListItem button component={Link} to="/infrastructure" className="quick-links-items">
                    <Typography className="quick-links-text">infrastructure</Typography>
                </ListItem>
                <ListItem button component={Link} to="/contacts" className="quick-links-items">
                    <Typography className="quick-links-text">Contact Us</Typography>
                </ListItem>
            </List>
        </div>
    );
};

export default QuickLinks;
