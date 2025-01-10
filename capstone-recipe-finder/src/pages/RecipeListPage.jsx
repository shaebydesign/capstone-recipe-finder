import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";

const RecipeListPage = () => {
  return (
    <>
      <Navbar />
      <header className="bg-gray-200 py-6">
        <h1 className="text-4xl font-bold text-center">Recipes</h1>
      </header>
      <main className="p-6">
        <SearchBar />
        <div className="grid grid-cols-3 gap-4 mt-6">
          {[1, 2, 3, 4, 5, 6].map((recipe) => (
            <div
              key={recipe}
              className="border rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={`https://via.placeholder.com/150?text=Recipe+${recipe}`}
                alt={`Recipe ${recipe}`}
                className="w-full"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">Recipe {recipe}</h3>
                <p className="text-gray-700">A brief description of Recipe {recipe}.</p>
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
