import React from 'react';

const RecipeDetails = ({ recipe }) => {
  if (!recipe) return <div>Recipe not found</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md mt-6">
      <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full rounded-md mb-6" />
      <h1 className="text-4xl font-bold mb-4">{recipe.strMeal}</h1>

      {/* Ingredients */}
      <h2 className="text-2xl font-semibold mb-3">Ingredients</h2>
      <ul className="list-disc pl-6 mb-4">
        {Object.keys(recipe)
          .filter((key) => key.startsWith("strIngredient") && recipe[key])
          .map((key, index) => (
            <li key={index}>
              {recipe[key]} - {recipe[`strMeasure${key.replace("strIngredient", "")}`] || "N/A"}
            </li>
          ))}
      </ul>

      {/* Instructions */}
      <h2 className="text-2xl font-semibold mb-3">Instructions</h2>
      <p className="text-gray-700">{recipe.strInstructions || "No instructions available."}</p>

      {/* Video Tutorial */}
      {recipe.strYoutube && (
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-3">Video Tutorial</h2>
          <iframe
            width="100%"
            height="400"
            src={`https://www.youtube.com/embed/${recipe.strYoutube.split("v=")[1]}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default RecipeDetails;
