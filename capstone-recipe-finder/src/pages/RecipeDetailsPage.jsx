import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RecipeDetailsPage = () => {
  return (
    <>
      <Navbar />
      <header className="bg-gray-200 py-6">
        <h1 className="text-4xl font-bold text-center">Recipe Details</h1>
      </header>
      <main className="p-6">
        <div className="max-w-4xl mx-auto">
          <img
            src="https://via.placeholder.com/600x400"
            alt="Recipe"
            className="w-full rounded-lg"
          />
          <h2 className="text-3xl font-bold mt-6">Recipe Title</h2>
          <p className="text-gray-700 mt-4">
            Detailed description of the recipe and instructions.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default RecipeDetailsPage;
