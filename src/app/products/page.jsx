import PageBanner from "@/components/shared/PageBanner/PageBanner";
import Products from "@/components/ProductsPage/Products/Products";
import NotFound from "@/components/shared/NotFound/NotFound";
import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const ProductsPage = () => {
  return (
    <div>
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <p>
          <Skeleton count={3} />
        </p>
      </SkeletonTheme>
      <PageBanner title={"Explore Our Collections"} subtitle="Discover our curated collection designed for your everyday elegance."/>
      <Products />
      {/* <NotFound/> */}
    </div>
  );
};

export default ProductsPage;
