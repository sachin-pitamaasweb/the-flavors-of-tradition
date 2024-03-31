import React from 'react';

import Logo from '../assets/images/Logo.png'
import Instagram from '../assets/images/Instagram.png';
import Twitter from '../assets/images/TwitterX.png';
import Facebook from '../assets/images/Facebook.png';
import Phone from '../assets/images/Phone.png';
import location from '../assets/images/location.png';
import Email from '../assets/images/Email.png';

import '../style/Footer.css';

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <section>
                    <div className="logo-container">
                        <div className="logo-background">
                            <div className="footer-logo">
                                <img src={Logo} width={290} height={178} alt='footer-logo' className="footer-logo-img" />
                            </div>
                        </div>
                    </div>
                    <div className='social-icons-container'>
                        <div className="social-icon">
                            <img src={Instagram} alt="instagram" className='icons' />
                            <img src={Twitter} alt="twitter" className='icons' />
                            <img src={Facebook} alt="facebook" className='icons' />
                        </div>
                    </div>
                    <div className='quick-links-container'>
                        <div className='quick-links'>
                            <div className='quick-links-title'>Quick-Links</div>
                            <div className='quick-links-lists'>
                                <span className='quick-links-span'>Home</span>
                                <span className='quick-links-span'>About Us</span>
                                <span className='quick-links-span'>Products</span>
                                <span className='quick-links-span'>Events</span>
                                <span className='quick-links-span'>Infrastructure</span>
                                <span className='quick-links-span'>Contacts Us</span>
                            </div>
                        </div>
                    </div>
                    <div className='contact-us'>
                        <div className='contact-us-container'>
                            <div className='contact-us-icons-details'>
                                <img src={Phone} alt="phone" className='contact-us-icons' />
                                <span className='contact-us-span'>+91 1234567890</span>
                            </div>
                            <hr className='hr-line' />
                            <div className='contact-us-icons-details'>
                                <img src={location} alt="location" className='contact-us-icons' />
                                <span className='contact-us-span'>Punjab-India</span>
                            </div>
                            <hr className='hr-line' />
                            <div className='contact-us-icons-details'>
                                <img src={Email} alt="Email" className='contact-us-icons' />
                                <span className='contact-us-span'>xyz@gmail.coms</span>
                            </div>

                        </div>
                    </div>
                </section>
            </footer>
        </>
    )
}
export default Footer;