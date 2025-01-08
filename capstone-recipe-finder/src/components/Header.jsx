import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gray-800 text-white py-4">
      <nav className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">
          <Link to="/">Recipe Finder</Link>
        </h1>
        <div>
          <Link to="/" className="px-4 hover:underline">
            Home
          </Link>
          <Link to="/recipes" className="px-4 hover:underline">
            Recipes
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
