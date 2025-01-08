import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

function RecipeDetailsPage() {
  const { id } = useParams();

  // Replace with API call to fetch recipe details
  const recipe = {
    title: "Spaghetti Bolognese",
    image: "/images/spaghetti.jpg",
    description:
      "A classic Italian pasta dish made with ground meat, tomatoes, and herbs.",
    ingredients: ["Spaghetti", "Ground Beef", "Tomatoes", "Onion", "Garlic"],
    instructions: [
      "Cook spaghetti according to package instructions.",
      "In a pan, sauté onions and garlic.",
      "Add ground beef and cook until browned.",
      "Add tomatoes and simmer for 20 minutes.",
      "Serve sauce over spaghetti.",
    ],
  };

  return (
    <div className="recipe-details-page">
      <Header />
      <main className="container mx-auto py-12">
        <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full max-h-96 object-cover rounded mb-6"
        />
        <p className="text-lg mb-4">{recipe.description}</p>
        <h2 className="text-2xl font-bold mb-2">Ingredients</h2>
        <ul className="list-disc ml-8 mb-6">
          {recipe.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <h2 className="text-2xl font-bold mb-2">Instructions</h2>
        <ol className="list-decimal ml-8">
          {recipe.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </main>
    </div>
  );
}

export default RecipeDetailsPage;
