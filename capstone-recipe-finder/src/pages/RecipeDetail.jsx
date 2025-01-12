import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMealDetail } from '../api/mealdb'; // Make sure your API function is correct

const RecipeDetail = () => {
  const { id } = useParams();  // Get the id from the URL
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    const fetchDetail = async () => {
      const data = await fetchMealDetail(id);
      setMeal(data);
    };

    fetchDetail();
  }, [id]);

  if (!meal) return <div>Loading...</div>;

  return (
    <div>
      <h1>{meal.strMeal}</h1>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <p>{meal.strInstructions}</p>
      {/* Display other details like ingredients, etc. */}
    </div>
  );
};

export default RecipeDetail;
