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
        setError('No recipes found for your search.');
      }
    } catch (error) {
      setError('An error occurred while fetching recipes.');
    }
  };

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <header
        className="bg-cover bg-center h-[600px] flex flex-col items-center justify-center text-white relative"
        style={{ backgroundImage: "url('/assets/hero-pattern.jpg')" }} 
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <h1 className="text-black text-center font-sans text-4xl font-bold leading-[60px]">
          Explore Delicious Recipes
        </h1>
        <p className="text-lg mb-8 text-center z-10">
          Find and save recipes you’ll love. Browse by category or search for your favorite dishes.
        </p>
        <CTAButton text="Get Started" link="/recipes" />
      </header>

      {/* Search and Recipes Section */}
      <div className="container mx-auto p-4">
        <SearchBar onSearch={fetchRecipes} />
        {error && <p className="text-red-500 mt-4">{error}</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
