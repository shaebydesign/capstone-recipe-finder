import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (onSearch) onSearch(query);
  };

  return (
    <div className="search-bar my-6">
      <input
        type="text"
        placeholder="Search for recipes..."
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="mt-2 w-full bg-blue-600 text-white py-2 rounded-lg"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
