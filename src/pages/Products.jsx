import React from "react";

import ProductsCards from "../components/ProductsCards";
// import ImageCarousel from "../common/ImageCarousel";
import ProductLineup from "../components/ProductLineup";

import HeroSection from "../common/HeroSection";

const Products = () => {
    return (
        <>
            {/* <ImageCarousel /> */}
            <HeroSection
                imageSrc={require('../assets/images/product-banner.jpg')}
                // text="Products"
            />
            <ProductLineup />
            <ProductsCards />
        </>
    )
}

export default Products