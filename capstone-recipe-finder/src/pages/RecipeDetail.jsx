import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMealDetail } from '../api/mealdb';  // Import the correct function

const RecipeDetail = () => {
  const { id } = useParams();  // Get the meal ID from the URL
  const [recipe, setRecipe] = useState(null);  // State to hold the recipe data

  useEffect(() => {
    const getRecipeDetail = async () => {
      const data = await fetchMealDetail(id);  // Fetch meal details using the ID
      setRecipe(data);  // Set the recipe data to state
    };

    getRecipeDetail();
  }, [id]);

  if (!recipe) return <div>Loading...</div>;  // Display loading message until data is fetched

  return (
    <div>
      <h1>{recipe.strMeal}</h1>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <h2>Ingredients</h2>
      <ul>
        {/* Display ingredients */}
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2>Instructions</h2>
      <p>{recipe.strInstructions}</p>
    </div>
  );
};

export default RecipeDetail;
