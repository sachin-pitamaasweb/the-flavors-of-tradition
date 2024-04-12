import React from 'react';
// import ImageCarousel from '../common/ImageCarousel';

import EventsCards from '../components/EventsCards';

import HeroSection from '../common/HeroSection';

const Events = () => {
    return (
        <>
            {/* <ImageCarousel /> */}
            <HeroSection 
            imageSrc={require('../assets/images/event-banner.png')}
            text="Events"
            isStyled={true}
            />
            <EventsCards />
        </>
    )
}
export default Events;