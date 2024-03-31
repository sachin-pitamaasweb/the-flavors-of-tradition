import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Drawer } from '@mui/material';

import '../style/Header.css';

import { navLinks } from '../Hepler.jsx';

import Logo from '../assets/images/the-flavors-of-tradition.png';

const Header = () => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (isOpen) => {
        setOpen(isOpen);
    };

    const handleLinkClick = () => {
        toggleDrawer(false); 
    };

    const leftNavLinks = navLinks.filter(link => ['Home', 'About Us', 'Products'].includes(link.text));
    const rightNavLinks = navLinks.filter(link => ['Events', 'Infrastructure', 'Contacts Us'].includes(link.text));


    return (
        <>
            <header>
                <div className="menu-btn" onClick={() => toggleDrawer(true)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="container">
                    <nav className="left-nav">
                        <ul>
                            {leftNavLinks.map((link, index) => (
                             <li key={index}><Link to={link.to} onClick={handleLinkClick}>{link.text}</Link></li>
                            ))}
                        </ul>
                    </nav>
                    <div className="logo"><img src={Logo} width={90} height={90} alt='logo' /></div>
                    <nav className="right-nav">
                        <ul>
                            {rightNavLinks.map((link, index) => (
                                <li key={index}><Link to={link.to} onClick={handleLinkClick}>{link.text}</Link></li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </header>
            <Drawer
                anchor="top"
                open={open}
                onClose={() => toggleDrawer(false)}
            >
                <div className="drawer-content">
                    <ul>
                    {[...leftNavLinks, ...rightNavLinks].map((link, index) => (
                            <li key={index}><Link to={link.url} onClick={handleLinkClick}>{link.text}</Link></li>
                        ))}
                    </ul>
                </div>
            </Drawer>
        </>
    )
}

export default Header;
