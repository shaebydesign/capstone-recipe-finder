import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-8">
      <div className="grid grid-cols-3 gap-8">
        {/* Left Segment */}
        <div>
          <h3 className="text-lg font-bold mb-4">Recipe Findr</h3>
          <p className="text-sm">
            Discover amazing recipes and elevate your cooking experience.
          </p>
        </div>
        {/* Middle Segment */}
        <div>
          <h3 className="text-lg font-bold mb-4">Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-green-500">Home</a></li>
            <li><a href="/about" className="hover:text-green-500">About</a></li>
            <li><a href="/recipes" className="hover:text-green-500">Recipes</a></li>
            <li><a href="/contact" className="hover:text-green-500">Contact</a></li>
          </ul>
        </div>
        {/* Right Segment */}
        <div>
          <h3 className="text-lg font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              Facebook
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Twitter
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
