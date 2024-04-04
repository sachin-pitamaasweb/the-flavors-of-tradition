import React from 'react';

import '../style/Home.css';

import Group from '../assets/images/Group.png';
import inkn from '../assets/images/inkn.png';
import scczc from '../assets/images/SCCZC.png';
import sxa from '../assets/images/sxa.png';
import fchcfvb from '../assets/images/fchcfvb.png';
import axax from '../assets/images/axax.png';
import MRMC from '../assets/images/MRMC.png';
import MRMC1 from '../assets/images/MRMC1.png';
import MRMC2 from '../assets/images/MRMC2.png';
import gjh from '../assets/images/gjh.png';
import ygygy from '../assets/images/ygygy.png';

import Hero from '../common/Hero.jsx';
import ExploreOur from './ExploreOur.jsx';
import Testimonials from './Testimonials.jsx';

const Home = () => {
    return (
        <>
            <Hero
            imageUrl={Group}
            altText="group"
            title="The Flavors of Tradition"
            />
            <section className="our-heritage-container">
                <div className="our-heritage-wrapper">
                    <h4 className="our-heritage-title">OUR HERITAGE</h4>
                    <h1 className="heritage-content">
                        Taste the Essence of Excellence
                        with MRMC Foods
                    </h1>
                </div>
                <div className="heritage-description">
                    <div className="image-container">
                        <img src={inkn} alt="inkn" width={564} height={681} className="img-inkn" />
                    </div>
                    <p className="heritage-p">
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
                </div>
                <div className="btn-div">
                    <button className="btn-know-more">Know More</button>
                </div>
            </section>
            <section className="why-choose-us">
                <div className="container-why-choose">
                    <h2 className='why-choose-us-title'>Why Choose Us?</h2>
                    <div className="content">
                        <p className='why-choose-us-p'>
                            Firstly, MRMC FOODS is loyal to Quality that's why we have access to the world’s<br />
                            infinite customers. MRMC FOODS has all the essential certifications which are<br />
                            vital for the export of basmati rice through out the world. 1121 SELA, 1121<br />
                            STEAM, 1509 SELA, 1509 STEAM, SUGANDHA SELA, SUGANDHA STEAM, <br />
                            SHARBATIISELA, SHARBATI STEAM, PR11 SELA, PR11 STEAM, IR 64<br />
                            SELA, IR 64 STEAM, SONA MUSSORIE are our best leading varieties.
                        </p>
                    </div>
                    <div className="image-row">
                      <div className="image-div">
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
                    </div>
                    <div className='image-text-row'>
                        <div className="image-container-text">
                            <span className='image-text-span'>Uncompromising Quality</span>
                        </div>
                        <div className="image-container-text">
                            <span className='image-text-span'>Diverse Varieties</span>
                        </div>
                        <div className="image-container-text">
                            <span className='image-text-span'>Trusted Reputation</span>
                        </div>
                        <div className="image-container-text">
                            <span className='image-text-span'>Customer-Centric</span>
                        </div>
                    </div>
                </div>
            </section>
            <ExploreOur />
            {/* <section className="testimonials">
                <div className='testimonials-container'>
                    <h4 className="testimonials-title">TESTIMONIALS</h4>
                    <h1 className="testimonials-content">
                        Glowing reviews from customers!
                    </h1>
                </div>
            </section> */}
        <Testimonials />
            {/* <section className="testimonials-card">
                <div className='explore-image'>
                    <div className='testimonials-card-container'>
                        <div className='explore-img-row'>
                            <div className='explore-img'>
                                <img src={gjh} alt="explore" className='img-explore' id="explore-img-id" />
                            </div>
                            <div className='explore-img' id="explore-img-div">
                                <img src={ygygy} alt="explore" className='img-explore' />
                            </div>
                            <div className='explore-img' id="explore-img-div1">
                                <img src={gjh} alt="explore" className='img-explore' id="explore-img-id1" />
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </>
    )
}
export default Home;
