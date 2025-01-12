// src/api/mealdb.js

// Function to fetch meals based on a search query
export const fetchMeals = async (searchQuery) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`);
  const data = await response.json();
  return data.meals || []; // Return the meals or an empty array if no meals found
};

// Function to fetch meal details by meal ID
export const fetchMealDetail = async (id) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  const data = await response.json();
  return data.meals[0]; // Return the meal detail for the given ID
};
