import React from "react";

const CategoryCarousel = () => {
  const categories = ["Breakfast", "Lunch", "Dinner", "Dessert", "Snacks"];

  return (
    <div className="flex space-x-4 overflow-x-scroll p-4">
      {categories.map((category, index) => (
        <div
          key={index}
          className="bg-yellow-300 rounded-lg shadow-md p-6 flex-none w-48 text-center"
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default CategoryCarousel;
