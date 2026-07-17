import PageBanner from "@/components/shared/PageBanner/PageBanner";
import Products from "@/components/ProductsPage/Products/Products";
import React from "react";


const ProductsPage = () => {
  return (
    <div>
   
      <PageBanner title={"Explore Our Collections"} subtitle="Discover our curated collection designed for your everyday elegance."/>
      <Products />
   
    </div>
  );
};

export default ProductsPage;
