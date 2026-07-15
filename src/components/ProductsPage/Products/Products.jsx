/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useMemo } from "react";
import products from "@/data/productsData";
import FilterSearch from "../FilterAndSearch/FilterSearch";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = products.map((p) => p.category);
    return ["All", ...new Set(cats)];
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
    <section className="py-12 lg:py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar: Category Filter & Search */}
        <FilterSearch
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          categories={categories}
        />

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-foreground rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Product Image */}
                <div className="relative aspect-4/5 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    
                  />
                  {!product.inStock && (
                    <span className="absolute top-3 left-3 bg-black/70 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Out of Stock
                    </span>
                  )}

                  {
                    product.inStock &&   <span className="absolute top-3 left-3 bg-black/70 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Out of Stock
                    </span>
                  }
                  {product.isFeatured && (
                    <span className="absolute top-3 right-3 bg-[var(--accent)] text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                </div>

                {/* Product Details */}
                <div className="p-5 flex flex-col flex-grow">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)] mb-1">
                    {product.category}
                  </span>
                  <h3 className="text-lg font-bold text-[var(--text)] mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-1 mb-3">
                    {/* Rating stars */}
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400"
                            : "text-gray-300 dark:text-gray-600"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-sm text-[var(--muted-text)] ml-1">
                      ({product.rating})
                    </span>
                  </div>
                  <p className="text-sm text-[var(--muted-text)] mb-4 line-clamp-2 flex-grow">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xl font-bold text-[var(--accent)]">
                      ৳{product.price}
                    </span>
                    <button className="px-5 py-2 bg-[var(--accent)] text-white text-sm font-semibold rounded-lg hover:bg-[var(--accent)]/90 transition-all duration-200 hover:shadow-lg active:scale-95">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <p className="text-xl text-[var(--muted-text)]">
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
