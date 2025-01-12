import React from "react";
import RecipeCard from "../components/RecipeCard";

const PopularRecipes = ({ recipes }) => {
  return (
    <section className="popular-recipes py-16 px-8 bg-white">
      <h2 className="text-2xl font-bold text-center mb-8">Popular Recipes</h2>
      <div className="grid grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} />
        ))}
      </div>
    </section>
  );
};

export default PopularRecipes;
