import React from "react";

const HeroSection = () => {
  return (
    <div className="hero bg-gray-100 py-16 px-8">
      {/* Navigation Bar */}
      <div className="flex justify-between items-center mb-8">
        <div className="logo text-2xl font-bold text-green-500">Recipe Findr</div>
        <nav className="flex space-x-8">
          <a href="/" className="text-gray-700 hover:text-green-500">Home</a>
          <a href="/about" className="text-gray-700 hover:text-green-500">About</a>
          <a href="/recipes" className="text-gray-700 hover:text-green-500">Recipes</a>
          <a href="/contact" className="text-gray-700 hover:text-green-500">Contact</a>
        </nav>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for recipes"
            className="border p-2 rounded-md"
          />
        </div>
      </div>

      {/* Hero Content */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          Discover Delicious Recipes From Around the World!
        </h1>
        <button className="bg-green-500 text-white px-6 py-3 rounded-full mt-4">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroSection;

