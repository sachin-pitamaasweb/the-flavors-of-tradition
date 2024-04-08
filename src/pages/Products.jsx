import React from "react";

import ProductsCards from "../components/ProductsCards";
import ImageCarousel from "../common/ImageCarousel";
import ProductLineup from "../components/ProductLineup";

const Products = () => {
    return(
        <>
        <ImageCarousel />
        <ProductLineup />
        <ProductsCards />
        </>
    )
}

export default Products