
import React from "react";
import { Grid } from '@mui/material';

import '../style/Footer.css';
import QuickLinks from "./QuickLinks";
import SocialIcons from "../common/SocialIcons";
import FooterContact from "./FooterContact";

const Footer = () => {

    return (
        <>
            <footer className="footer">
                <div className="logo-container">
                    <div className="logo-background">
                        <div className="footer-logo">
                            <img src={require('../assets/images/Logo.png')} width={290} height={178} alt='footer-logo' className="footer-logo-img" />
                        </div>
                    </div>
                </div>
                <Grid container spacing={2} className="footer-container">
                    {/* <Grid item xs={12}>
                        <div className="social-icon">
                            <img src={require('../assets/images/Instagram.png')} alt="Instagram" className="icon"
                                onClick={() => window.open("https://www.instagram.com/mrmc_foods/", "_blank", "noopener,noreferrer")}
                                style={{ cursor: 'pointer' }} />
                            <img src={require('../assets/images/Facebook.png')} alt="Facebook" className="icon"
                                onClick={() => window.open("https://www.facebook.com/mrmcfoods", "_blank", "noopener,noreferrer")}
                                style={{ cursor: 'pointer' }} />
                        </div>
                    </Grid> */}
                    <SocialIcons />
                    {/* <Grid items xs={12}>
                        <div className='quick-links-container'>
                            <div className='quick-links'>
                                <div className='quick-links-title'>Quick-Links</div>
                                <div className='quick-links-lists'>
                                    <span className='quick-links-span' >Home</span>
                                    <span className='quick-links-span'>About Us</span>
                                    <span className='quick-links-span'>Products</span>
                                    <span className='quick-links-span'>Events</span>
                                    <span className='quick-links-span'>Infrastructure</span>
                                    <span className='quick-links-span'>Contacts Us</span>
                                </div>
                            </div>
                        </div>
                    </Grid> */}
                    <QuickLinks />
                    <Grid items xs={12} className="contact-us">
                        <div className='contact-us'>
                            <div className='contact-us-container'>
                                <div className='contact-us-icons-details'>
                                    <img src={require('../assets/images/Phone.png')} alt="phone" className='contact-us-icons' style={{ objectFit: 'contain' }} />
                                    <a style={{ textDecoration: 'none' }} href="tel:+91 9876543210"><h3 className='contact-us-span'>+91 9876543210</h3></a>
                                </div>
                                <hr className='hr-line' />
                                <div className='contact-us-icons-details'>
                                    <img src={require('../assets/images/location.png')} alt="location" className='contact-us-icons' style={{ objectFit: 'contain' }} />
                                    <a style={{ textDecoration: 'none' }} href="https://www.google.com/maps/place/Feroz+Punjab/@30.8307583,74.0780589,17z/data=!3m1!4b1!4m5!3m4!1s0x3918f5d8b9b0b8b1:0x5c7d6e2e6a5e2b8d!8m2!3d30.8307577!4d74.0802476"><h3 className='contact-us-span'>Punjab-India</h3></a>
                                </div>
                                <hr className='hr-line' />
                                <div className='contact-us-icons-details'>
                                    <img src={require('../assets/images/Email.png')} alt="Email" className='contact-us-icons' style={{ objectFit: 'contain' }} />
                                    <a style={{ textDecoration: 'none' }} href="mailto:rajiv@mrmc.in"><h3 className='contact-us-span'>xyz@gmail.coms</h3></a>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    {/* <FooterContact /> */}
                </Grid>
            </footer>
        </>
    )
}
export default Footer;

