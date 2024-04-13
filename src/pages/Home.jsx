import React from 'react';

import ExploreOur from './ExploreOur.jsx';
import WhyChooseUs from '../components/WhyChooseUs.jsx';
import Testimonial from '../components/Testimonial.jsx';
import Heritage from '../components/Heritage.jsx';

import ImageCarousel from '../common/ImageCarousel.jsx';
import Quality from '../common/Quality.jsx';

const Home = () => {
    return (
        <>
            <ImageCarousel />
            <Heritage />
            <WhyChooseUs />
            <Quality
             applyAnimation={true}
            />
            <ExploreOur />
            <Testimonial /> 
           
        </>
    )
}
export default Home;
