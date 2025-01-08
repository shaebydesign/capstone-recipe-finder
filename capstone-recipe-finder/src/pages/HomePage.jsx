import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

function HomePage() {
  return (
    <div className="home-page">
      <Header />
      <main className="container mx-auto text-center py-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to Recipe Finder</h1>
        <p className="text-lg mb-6">
          Discover amazing recipes from around the world. Start exploring now!
        </p>
        <Link
          to="/recipes"
          className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700"
        >
          Explore Recipes
        </Link>
      </main>
    </div>
  );
}

export default HomePage;
