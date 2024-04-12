import React from "react";

import ProductsCards from "../components/ProductsCards";
import ProductLineup from "../components/ProductLineup";
import HeroSection from "../common/HeroSection";

const Products = () => {
    return (
        <>

            <HeroSection
                imageSrc={require('../assets/images/product-banner.png')}
                // text="Products"
                isStyled={false}

            />
            <ProductLineup />
            <ProductsCards />
        </>
    )
}

export default Products