import React from 'react';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      {/* Use real API image */}
      <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full h-48 object-cover" />
      
      {/* Use real API text */}
      <div className="p-4">
        <h3 className="font-bold text-lg">{recipe.strMeal}</h3>
        <p className="text-sm text-gray-600">{recipe.strCategory} - {recipe.strArea}</p>
      </div>
    </div>
  );
};

export default RecipeCard;
