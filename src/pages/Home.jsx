import React from 'react';

import '../style/Home.css';

import Group from '../assets/images/Group.png';

import Hero from '../common/Hero.jsx';
import ExploreOur from './ExploreOur.jsx';
import WhyChooseUs from '../components/WhyChooseUs.jsx';
import Testimonials from './Testimonials.jsx';

const Home = () => {
    return (
        <>
            <Hero
                imageUrl={Group}
                altText="group"
                title="The Flavors of Tradition"
            />
           
                    <WhyChooseUs />
            <ExploreOur />
            <Testimonials />
        </>
    )
}
export default Home;
