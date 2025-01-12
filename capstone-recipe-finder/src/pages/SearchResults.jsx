import React from 'react';
import { Link } from 'react-router-dom';

const SearchResults = ({ meals }) => {
  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-center text-3xl font-bold mb-6">Search Results</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {meals && meals.length > 0 ? (
          meals.map((meal) => (
            <div key={meal.idMeal} className="recipe-card bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{meal.strMeal}</h3>
                <p className="text-gray-600 mb-4">{meal.strCategory}</p>
                <Link
                  to={`/recipe/${meal.idMeal}`}
                  className="text-green-600 font-semibold hover:underline"
                >
                  View Recipe
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
