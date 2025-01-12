// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { fetchMeals } from './api/mealdb';  // Ensure this import is correct
import './styles/App.css';  // Import custom CSS
import RecipeDetail from './pages/RecipeDetail';
import Home from './pages/Home'; // Home page for recipe list

const App = () => {
  const [meals, setMeals] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchMeals(query);  // Make sure this function fetches the correct data
      setMeals(data || []);
    } catch (error) {
      setError('Failed to fetch meals. Please try again.');
    }
    setLoading(false);
  };

  return (
    <Router>
      <div className="container mx-auto px-4">
        <header className="text-center py-8">
          <h1 className="text-4xl font-bold">Recipe Finder</h1>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="mt-4 p-2 border border-gray-300 rounded"
            placeholder="Search for recipes"
          />
          <button
            onClick={handleSearch}
            className="ml-4 p-2 bg-blue-500 text-white rounded"
          >
            Search
          </button>
        </header>

        {loading && <div>Loading...</div>}
        {error && <div className="error">{error}</div>}

        <Routes>
          <Route path="/" element={<Home meals={meals} />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
