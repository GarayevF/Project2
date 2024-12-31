import React from "react";
import "../styles/Recipe.css";

const Recipe = ({ recipe }) => {
  const {
    id,
    title,
    description,
    ingredients,
    preparationSteps,
    tags,
    difficulty,
    lastUpdated,
  } = recipe;

  const handleEdit = () => {
    console.log(`Editing recipe: ${title}`);
  };

  const handleDelete = () => {
    console.log(`Deleting recipe with ID: ${id}`);
  };

  return (
    <div className="recipe-card">
      <h2 className="recipe-title">{title}</h2>
      <p className="recipe-description">{description}</p>

      <h3 className="section-heading">Ingredients:</h3>
      <ul className="ingredients-list">
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      <h3 className="section-heading">Preparation Steps:</h3>
      <ol className="preparation-steps">
        {preparationSteps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>

      <div className="tags">
        <span className="tags-label">Tags: </span>
        {tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>

      <div className="meta-info">
        <span>Difficulty: {difficulty}</span>
        <span>Last Updated: {new Date(lastUpdated).toLocaleString()}</span>
      </div>

      <div className="actions">
        <button className="edit-button" onClick={handleEdit}>
          Edit
        </button>
        <button className="delete-button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Recipe;
