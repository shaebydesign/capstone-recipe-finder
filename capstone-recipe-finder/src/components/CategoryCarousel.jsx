import React from "react";

const CategoryCarousel = () => {
  const categories = ["Breakfast", "Lunch", "Dinner", "Desserts", "Snacks"];

  return (
    <div className="flex space-x-4 overflow-x-auto p-4">
      {categories.map((category, index) => (
        <div
          key={index}
          className="bg-gray-200 p-4 rounded-lg shadow-lg text-center"
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default CategoryCarousel;
