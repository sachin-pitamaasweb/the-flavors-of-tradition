import React from "react";
import { IconButton } from "@mui/material";
import { Facebook, Instagram } from "@mui/icons-material";

import '../style/SocialIcons.css';

const SocialIcons = () => {
    return (
        <div className="social-icons-div">
            <a href="https://www.facebook.com/mrmcfoods/photos" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                <IconButton>
                    <Facebook className="mui-social-icons" />
                </IconButton>
            </a>
            <a href="https://www.instagram.com/mrmc_foods/" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                <IconButton>
                    <Instagram className="mui-social-icons" />
                </IconButton>
            </a>
        </div>
    );
};

export default SocialIcons;
