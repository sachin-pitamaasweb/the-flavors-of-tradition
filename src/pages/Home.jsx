import React from 'react';

import Group from '../assets/images/Group.png';

import Hero from '../common/Hero.jsx';
import ExploreOur from './ExploreOur.jsx';
import WhyChooseUs from '../components/WhyChooseUs.jsx';
import Testimonials from './Testimonials.jsx';
import Heritage from '../components/Heritage.jsx';

const Home = () => {
    return (
        <>
            <Hero
                imageUrl={Group}
                altText="group"
                title="The Flavors of Tradition"
            />
            <Heritage />
            {/* <WhyChooseUs /> */}
                    {/* <WhyChooseUs />
            <ExploreOur />
            <Testimonials /> */}
        </>
    )
}
export default Home;
