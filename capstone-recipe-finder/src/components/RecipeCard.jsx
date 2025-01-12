import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <h4 className="text-xl font-semibold text-center mt-2">{recipe.strMeal}</h4>
      <Link to={`/recipe/${recipe.idMeal}`} className="text-blue-600 text-center block mt-2">View Details</Link>
    </div>
  );
};

export default RecipeCard;
