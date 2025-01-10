import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import SearchBar from '../components/SearchBar';
import RecipeCard from '../components/RecipeCard';
import CTAButton from '../components/CTAButton';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState('');

  const fetchRecipes = async (query) => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      const data = await response.json();

      if (data.meals) {
        setRecipes(data.meals);
        setError('');
      } else {
        setRecipes([]);
        setError('No recipes found. Try searching for another dish!');
      }
    } catch (error) {
      setError('An error occurred while fetching recipes.');
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <header className="relative bg-hero-pattern bg-cover bg-center h-[600px] flex flex-col items-center justify-center text-white">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative text-center z-10">
          <h1 className="text-5xl font-extrabold leading-tight mb-4">
            Discover Delicious Recipes
          </h1>
          <p className="text-lg mb-6">
            Browse by category or search for your favorite dishes.
          </p>
          <CTAButton text="Get Started" link="/recipes" />
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto p-6">
        <SearchBar onSearch={fetchRecipes} />
        {error && <p className="text-red-600 mt-4">{error}</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
