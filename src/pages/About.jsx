import React from 'react';


import HeroSection from '../common/HeroSection';
import OurMission from '../components/OurMission ';
import FoundingStory from '../components/FoundingStory';
import ValuesAndPhilosophy from '../components/ValuesAndPhilosophy';

import '../style/About.css';


const About = () => {
    return (
        <>

            <HeroSection
             imageSrc={require('../assets/images/banner-about.png')}
             text="About Us"
             isStyled={true}
            />
            <FoundingStory />
            <ValuesAndPhilosophy />
            <OurMission />
          
        </>
    );
}

export default About;

