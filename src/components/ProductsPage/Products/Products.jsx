
"use client";
import React, { useState, useMemo } from "react";
import products from "@/data/productsData";
import FilterSearch from "../FilterAndSearch/FilterSearch";

import ProductCard from "../ProductCard/ProductCard";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = products.map((p) => p.category);
    return [`All (${products.length})`, ...new Set(cats)];
  }, []);

  // Filter products based on category and search
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

 
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar: Category Filter & Search */}
        <FilterSearch
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          categories={categories}
        />

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
             <ProductCard   key={product.id} product={product}/>
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <p className="text-xl text-text-secondary">
                No products found.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;
