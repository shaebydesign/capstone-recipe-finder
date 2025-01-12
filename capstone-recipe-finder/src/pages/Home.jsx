// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ meals }) => {
  return (
    <div className="home-container">
      <h1 className="home-title">Recipe Finder</h1>
      <div className="recipes-list">
        {meals?.map((meal) => (
          <div className="recipe-card" key={meal.idMeal}>
            <img src={meal.strMealThumb} alt={meal.strMeal} className="recipe-img" />
            <div className="recipe-info">
              <h3 className="recipe-name">{meal.strMeal}</h3>
              <p className="recipe-category">{meal.strCategory}</p>
              <Link to={`/recipe/${meal.idMeal}`} className="recipe-link">
                View Recipe
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
