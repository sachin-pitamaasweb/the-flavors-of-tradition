import React from 'react';

import '../style/About.css';
// import '../style/Home.css';

import Group from '../assets/images/Group.png';
import Story from '../assets/images/story.png';
import scczc from '../assets/images/SCCZC.png';
import sxa from '../assets/images/sxa.png';
import fchcfvb from '../assets/images/fchcfvb.png';
import axax from '../assets/images/axax.png';

const About = () => {
    return (
        <>
            <section className="hero">
                <div className="hero-content">
                    <div className="hero-image">
                        <div className="image"><img src={Group} alt='group' className='img-group' /></div>
                        <h1 className='h1-title'>About Us</h1>
                    </div>
                </div>
            </section>
            <section className="about-founding-story">
                <div className='about-founding-story-1'>
                    <div className="about-founding-story-text">
                        <h1 className="about-founding-story-title">Founding Story</h1>
                        <div className='about-founding-story-content'>
                            <p className='about-founding-story-p'>
                                Established in 2013, MRMC FOODS PRIVATE LIMITED<br />
                                is situated in the village Haan,ferozpur, Punjab. We are an <br />
                                ISO 22000: 2005, ISO 9001: 2008, HACCP FSSAI,and <br />
                                GOVT. RECOGNIZED STAR EXPORT HOUSE (RICE <br />
                                MILLERS & EXPORTERS) certified company.Our office<br />
                                and mills are equipped with the most futuristic machinery.<br />
                                With 10 years of experience in the rice business, which is a<br />
                                necessary food for half of the world's population, our<br />
                                vision is to provide aromatic Indian basmati and non-<br />
                                basmati rice to people worldwide.
                            </p>
                            <div className='about-founding-story-image'>
                                <img src={Story} alt="story" className='about-img-story' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about-value-of-philosophy">
                <div className="about-value-of-philosophy-text">
                    <h1 className="about-value-of-philosophy-title">Value of Philosophy</h1>
                </div>
            </section>
            <section className='about-image-section'>
                <div className="image-row">
                    <div className="image-container">
                        <img src={scczc} alt="scczc" className='img-scczc' />
                    </div>
                    <div className="image-container">
                        <img src={sxa} alt="sxa" className='img-sxa' />
                        <div className="image-text">
                            <p>Variety 1</p>
                            <p>Variety 1</p>
                            <p>Variety 1</p>
                        </div>
                    </div>
                    <div className="image-container">
                        <img src={axax} alt="axax" className='img-axax' />
                    </div>
                    <div className="image-container">
                        <img src={fchcfvb} alt="fchcfvb" className='img-fchcfvb' />
                    </div>
                </div>
            </section>
            <section className="about-our-mession">
                <div className="about-our-mession-text">
                    <h1 className="about-our-mession-title">Our Mession</h1>
                </div>
            </section>
            <section className='about-our-mession-description'>
                <div className="about-our-mession-description-text">
                    <p className='about-our-mession-description-p'>
                        At MRMC Foods, our mission is simple: to deliver premium rice products<br />
                        that exceed expectations. We're committed to quality, sustainability, and <br />
                        creating memorable dining experiences for our customers worldwide.
                    </p>
                </div>
            </section>
        </>
    );
}

export default About;

