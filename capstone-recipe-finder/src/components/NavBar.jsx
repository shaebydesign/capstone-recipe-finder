import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">Recipe Finder</div>
      <ul className="flex space-x-4">
        <li>
          <a href="/" className="hover:text-yellow-500">
            Home
          </a>
        </li>
        <li>
          <a href="/recipes" className="hover:text-yellow-500">
            Recipes
          </a>
        </li>
        <li>
          <a href="/about" className="hover:text-yellow-500">
            About
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
