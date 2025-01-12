// src/components/MealList.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const MealList = ({ meals }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {meals.length > 0 ? (
        meals.map((meal) => (
          <div key={meal.idMeal} className="border p-4 rounded-lg shadow-lg">
            <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-40 object-cover rounded-md" />
            <h3 className="mt-4 text-xl font-semibold">{meal.strMeal}</h3>
            <Link to={`/recipe/${meal.idMeal}`} className="text-green-500 hover:underline">
              View Recipe
            </Link>
          </div>
        ))
      ) : (
        <div>No meals found. Try a different search.</div>
      )}
    </div>
  );
};

export default MealList;
