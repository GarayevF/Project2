import React, { useState, useEffect } from "react";
import "../styles/Recipe.css";

const Recipe = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const response = await fetch("http://localhost:3000/recipes");
      const data = await response.json();
      setRecipes(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const AddItem = async () => {
    const newRecipe = {
      id: Date.now().toString(),
      title: "New Recipe",
      description: "This is a new recipe.",
      ingredients: ["Ingredient 1", "Ingredient 2"],
      preparationSteps: ["Step 1", "Step 2"],
      tags: ["Easy", "Quick"],
      difficulty: "Easy",
      lastUpdated: new Date().toISOString(),
    };

    try {
      await fetch(`http://localhost:3000/recipes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRecipe),
      });
      fetchRecipes();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const DeleteItem = async (recipeId) => {
    try {
      await fetch(`http://localhost:3000/recipes/${recipeId}`, {
        method: "DELETE",
      });
      fetchRecipes();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const UpdateItem = async (recipeId) => {
    const updatedRecipe = {
      id: recipeId,
      title: "Updated Recipe Title",
      description: "This is the updated description.",
      ingredients: ["Updated Ingredient 1", "Updated Ingredient 2"],
      preparationSteps: ["Updated Step 1", "Updated Step 2"],
      tags: ["Updated", "Tags"],
      difficulty: "Medium",
      lastUpdated: new Date().toISOString(),
    };

    try {
      await fetch(`http://localhost:3000/recipes/${recipeId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedRecipe),
      });
      fetchRecipes();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h1>Recipes</h1>

      <button onClick={AddItem}>Add Recipe</button>

      <div className="recipe-list">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <h2 className="recipe-title">{recipe.title}</h2>
            <p className="recipe-description">{recipe.description}</p>

            <h3 className="section-heading">Ingredients:</h3>
            <ul className="ingredients-list">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>

            <h3 className="section-heading">Preparation Steps:</h3>
            <ol className="preparation-steps">
              {recipe.preparationSteps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>

            <div className="tags">
              <span className="tags-label">Tags: </span>
              {recipe.tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>

            <div className="meta-info">
              <span>Difficulty: {recipe.difficulty}</span>
              <span>Last Updated: {new Date(recipe.lastUpdated).toLocaleString()}</span>
            </div>

            <div className="actions">
              <button
                className="edit-button"
                onClick={() => UpdateItem(recipe.id)}
              >
                Edit
              </button>
              <button
                className="delete-button"
                onClick={() => DeleteItem(recipe.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipe;
