import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import RecipeCard from "../components/RecipeCard";

const RecipeListPage = ({ recipes }) => {
  return (
    <>
      <Navbar />
      <header className="bg-gray-100 py-10">
        <h1 className="text-5xl font-bold text-center">All Recipes</h1>
        <p className="text-center text-gray-600 mt-3">
          Search and filter through a variety of recipes.
        </p>
      </header>

      <main className="container mx-auto p-6">
        <SearchBar />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default RecipeListPage;
