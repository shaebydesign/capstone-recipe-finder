import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-white fixed w-full top-0 z-50 shadow-md">
      <nav className="container mx-auto flex justify-between items-center py-4 px-4">
        <div className="logo text-2xl font-bold">Recipe Finder</div>
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-orange-500">Home</Link></li>
          <li><Link to="/recipes" className="hover:text-orange-500">Recipes</Link></li>
          <li><Link to="/about" className="hover:text-orange-500">About</Link></li>
          <li><Link to="/contact" className="hover:text-orange-500">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

