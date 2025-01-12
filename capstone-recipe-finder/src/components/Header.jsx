import React from 'react';

const Header = ({ onSearch }) => {
  // Function to handle the Enter key press event
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch(e.target.value);  // Trigger the search when Enter is pressed
    }
  };

  return (
    <header>
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <h1 className="text-black font-bold text-4xl sm:text-3xl">Recipe Finder</h1>
          <input
            type="text"
            placeholder="Search for recipes..."
            onKeyPress={handleKeyPress}  // Listen for Enter key press
            className="p-2 rounded-lg border-none sm:w-48 w-64"
          />
        </div>
      </div>

      {/* Hero section content */}
      <div className="container mx-auto text-center py-16">
        <h2 className="text-black text-3xl sm:text-2xl font-bold mb-4">Find the Best Recipes for Your Kids</h2>
        <button className="bg-green-600 text-white py-2 px-6 rounded-lg text-xl">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Header;
