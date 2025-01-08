import React from "react";
import Header from "../components/Header";
import RecipeCard from "../components/RecipeCard";

function RecipeListPage() {
  const recipes = [
    { id: 1, title: "Spaghetti Bolognese", image: "/images/spaghetti.jpg" },
    { id: 2, title: "Chicken Curry", image: "/images/chicken-curry.jpg" },
    { id: 3, title: "Veggie Stir Fry", image: "/images/stir-fry.jpg" },
  ];

  return (
    <div className="recipe-list-page">
      <Header />
      <main className="container mx-auto py-12">
        <h1 className="text-3xl font-bold mb-6">Recipe List</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default RecipeListPage;
