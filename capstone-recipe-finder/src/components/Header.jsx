import React from 'react';

const Header = ({ onSearch }) => {
  return (
    <header className="bg-blue-500 py-4 px-6">
      <div className="flex items-center justify-between">
        <h1 className="text-white font-bold text-2xl">Recipe Finder</h1>
        <input
          type="text"
          placeholder="Search for recipes..."
          onChange={(e) => onSearch(e.target.value)}
          className="p-2 rounded-lg border-none"
        />
      </div>
    </header>
  );
};

export default Header;

