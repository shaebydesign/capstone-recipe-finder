import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";

const RecipeListPage = () => {
  return (
    <>
      <Navbar />
      {/* Header Section */}
      <header className="bg-gray-100 py-6">
        <h1 className="text-4xl font-bold text-center">All Recipes</h1>
        <p className="text-center text-gray-600 mt-2">
          Search and filter through a wide range of recipes.
        </p>
      </header>

      {/* Main Content */}
      <main className="p-6">
        {/* Search Bar */}
        <SearchBar />

        {/* Recipe Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {[1, 2, 3, 4, 5, 6].map((recipe) => (
            <div
              key={recipe}
              className="border rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={`https://via.placeholder.com/300x200?text=Recipe+${recipe}`}
                alt={`Recipe ${recipe}`}
                className="w-full"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Recipe {recipe}</h3>
                <p className="text-gray-700 mb-4">
                  A brief description of Recipe {recipe}.
                </p>
                <a
                  href={`/recipes/${recipe}`}
                  className="text-blue-500 hover:underline"
                >
                  View Recipe
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default RecipeListPage;
