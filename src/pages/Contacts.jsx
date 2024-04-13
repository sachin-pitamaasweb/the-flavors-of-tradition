import React from "react";

import HeroSection from "../common/HeroSection";
import ContactInfo from "../components/ContactInfo";
import DropUsALine from "../components/DropUsALine.jsx";
import FindOurPlace from "../components/FindOurPlace.jsx";

const Contacts = () => {
    return (
        <>
            <HeroSection
                imageSrc={require('../assets/images/contact-banner.png')}
                text="Contact Us"
                isStyled={true}
            />
            <ContactInfo />
            <DropUsALine />
            <FindOurPlace />
        </>
    )
}

export default Contacts;