// src/api/mealdb.js
import axios from 'axios';

const API_URL = 'https://www.themealdb.com/api/json/v1/1/';

// Fetch meals by search query
export const fetchMeals = async (query) => {
  try {
    const response = await axios.get(`${API_URL}search.php?s=${query}`);
    return response.data.meals; // Automatically parses the response into JSON
  } catch (error) {
    console.error('Error fetching meals:', error);
    return []; // Return an empty array if there's an error
  }
};

// Fetch meal detail by ID
export const fetchMealDetail = async (id) => {
  try {
    const response = await axios.get(`${API_URL}lookup.php?i=${id}`);
    return response.data.meals[0]; // Return the first meal in the response
  } catch (error) {
    console.error('Error fetching meal details:', error);
    return null; // Return null if there's an error
  }
};
