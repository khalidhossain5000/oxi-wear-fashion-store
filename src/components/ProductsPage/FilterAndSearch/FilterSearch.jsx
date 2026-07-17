import { ChevronDown, Search } from "lucide-react";
import React from "react";

const FilterSearch = ({
  selectedCategory,
  setSelectedCategory,
  searchQuery,
  setSearchQuery,
  categories,
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
      {/* Category Dropdown */}
      <div className="relative w-full sm:w-auto">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="appearance-none w-full sm:w-56 bg-foreground border border-border rounded-xl px-5 py-3 pr-10 text-text-primary font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent transition-shadow font-manrope "
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        {/* Custom dropdown arrow */}
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <ChevronDown />
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative w-full sm:w-72 lg:w-80">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-foreground border border-border rounded-xl pl-12 pr-5 py-3 text-text-primary placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-accent transition-shadow font-manrope "
        />
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
      </div>
    </div>
  );
};

export default FilterSearch;
