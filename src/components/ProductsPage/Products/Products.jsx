/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useMemo } from "react";
import products from "@/data/productsData";
import FilterSearch from "../FilterAndSearch/FilterSearch";
import Rating from "react-rating";
import { Star } from "lucide-react";

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
                    <span className="absolute top-3 left-3 bg-black/70  text-text-primary text-xs font-semibold px-3 py-1 rounded-full">
                      Out of Stock
                    </span>
                  )}

                  {product.inStock && (
                    <span className="absolute top-3 left-3 bg-black/70  text-text-primary text-xs font-semibold px-3 py-1 rounded-full">
                      In Stock
                    </span>
                  )}
                  {product.isFeatured && (
                    <span className="absolute top-3 right-3 bg-accent text-text-primary text-xs font-semibold px-3 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                </div>

                {/* Product Details */}
                <div className="p-5 flex flex-col grow">
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent mb-1">
                    {product.category}
                  </span>
                  <h3 className="text-lg font-bold text-text-primary mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-1 mb-3">
                    {/* Rating stars */}
                    <div className="flex items-center">
                      <Rating
                        initialRating={product.rating}
                        fractions={1}
                        start={0}
                        stop={5}
                        readonly
                        emptySymbol={
                          <Star
                            size={22}
                            className="text-gray-300 fill-gray-300"
                          />
                        }
                        fullSymbol={
                          <Star
                            size={22}
                            className="text-yellow-400 fill-yellow-400"
                          />
                        }
                      />
                    </div>
                    <span className="text-sm text-text-secondary ml-1">
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
