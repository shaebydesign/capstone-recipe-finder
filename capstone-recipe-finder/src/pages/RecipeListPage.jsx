import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchRecipes } from '../utils/fetchRecipes'; // Utility function for API calls

const RecipeListPage = () => {
  const { category } = useParams(); // Get category from URL
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1); // To track the current page
  const [loading, setLoading] = useState(false); // For loading state
  const [hasMore, setHasMore] = useState(true); // To check if more recipes are available
  const navigate = useNavigate();

  useEffect(() => {
    const getRecipes = async () => {
      setLoading(true);
      let fetchedRecipes = [];
      if (category) {
        // Fetch recipes by category with pagination
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}&page=${currentPage}`);
        const data = await response.json();
        fetchedRecipes = data.meals || [];
      } else {
        // Fetch recipes by search query with pagination
        const response = await fetchRecipes(searchQuery, currentPage);
        fetchedRecipes = response;
      }
      
      if (fetchedRecipes.length > 0) {
        setRecipes((prevRecipes) => [...prevRecipes, ...fetchedRecipes]);
      } else {
        setHasMore(false); // No more recipes to load
      }
      setLoading(false);
    };

    getRecipes();
  }, [category, searchQuery, currentPage]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery) {
      navigate(`/recipes/${searchQuery}`);
    }
  };

  const loadMoreRecipes = () => {
    if (hasMore && !loading) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className="p-6">
      {/* Search Results Title */}
      <h2 className="text-3xl font-bold mb-4">
        {searchQuery ? `Search results for "${searchQuery}"` : 'Recipe List'}
      </h2>

      {/* Search Bar */}
      <form onSubmit={handleSearchSubmit} className="mb-6">
        <input
          type="text"
          placeholder="Search for recipes..."
          className="w-full p-3 border border-gray-300 rounded"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </form>

      {/* Recipe List */}
      <div className="grid grid-cols-4 gap-6 mt-16">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <div
              key={recipe.idMeal}
              className="flex flex-col justify-between bg-white shadow-lg rounded-lg p-4 h-[380px] overflow-hidden"
            >
              <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                className="w-full h-[150px] object-cover rounded"
              />
              <h3 className="text-lg font-semibold mt-4">{recipe.strMeal}</h3>
              <p className="mt-2 text-sm">
                <strong>Category:</strong> {recipe.strCategory}
              </p>
              <p className="text-sm">
                <strong>Cuisine:</strong> {recipe.strArea}
              </p>

              <button
                onClick={() => navigate(`/recipe/${recipe.idMeal}`)}
                className="mt-auto text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded-md"
              >
                View Details
              </button>
            </div>
          ))
        ) : (
          <div>No recipes found</div>
        )}
      </div>

      {/* Load More Button */}
      {hasMore && (
        <div className="mt-6 text-center">
          <button
            onClick={loadMoreRecipes}
            className={`text-white bg-blue-500 hover:bg-blue-600 py-2 px-6 rounded-md ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Load More Recipes'}
          </button>
        </div>
      )}

      {/* If no more recipes, display a message */}
      {!hasMore && (
        <div className="mt-4 text-center text-gray-500">
          No more recipes to load.
        </div>
      )}
    </div>
  );
};

export default RecipeListPage;

