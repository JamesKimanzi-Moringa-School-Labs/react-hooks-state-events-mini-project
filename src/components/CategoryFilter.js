import React, { useState } from "react";

function CategoryFilter({ categories, onCategoryChange }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    onCategoryChange(category);
  };

  return (
    <div className="categories">
      <h5>Category filters</h5>
      <button
        key="All"
        className={selectedCategory === "All" ? "selected" : ""}
        onClick={() => handleCategoryChange("All")}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          className={selectedCategory === category ? "selected" : ""}
          onClick={() => handleCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
