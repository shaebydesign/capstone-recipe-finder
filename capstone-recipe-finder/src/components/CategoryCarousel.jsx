import React from "react";

function CategoryCarousel() {
  const categories = [
    { id: 1, name: "Italian", image: "/images/italian.jpg" },
    { id: 2, name: "Indian", image: "/images/indian.jpg" },
    { id: 3, name: "Mexican", image: "/images/mexican.jpg" },
    { id: 4, name: "Desserts", image: "/images/desserts.jpg" },
  ];

  return (
    <div className="carousel flex space-x-4 overflow-x-auto">
      {categories.map((category) => (
        <div
          key={category.id}
          className="w-48 h-48 bg-gray-200 rounded-lg shadow-md flex-shrink-0"
          style={{
            backgroundImage: `url(${category.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-black bg-opacity-50 text-white text-center py-2 rounded-b-lg">
            {category.name}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CategoryCarousel;
