import React from "react";

const Categories = ({ categories }) => {
  return (
    <section className="categories py-16 px-8 bg-gray-50">
      <h2 className="text-2xl font-bold text-center mb-8">Categories</h2>
      <div className="flex justify-between space-x-4">
        {categories.map((category) => (
          <div key={category.id} className="category-card flex-1 bg-white shadow-md rounded-md overflow-hidden">
            <img
              src={category.image}
              alt={category.name}
              className="h-40 w-full object-cover"
            />
            <div className="p-4 text-center font-semibold">{category.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
