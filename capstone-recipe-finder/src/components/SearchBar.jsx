import React from "react";

function SearchBar() {
  return (
    <div className="search-bar my-6">
      <input
        type="text"
        placeholder="Search for recipes..."
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
    </div>
  );
}

export default SearchBar;
