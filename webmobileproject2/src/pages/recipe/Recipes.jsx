import React, { useEffect, useState } from 'react'

const Recipes = () => {
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
      id: "3", 
      name: "new Recipe" 
    };

    try {
      await fetch(`http://localhost:3000/recipes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRecipe),
      });
      fetchRecipes()
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const DeleteItem = async () => {
    const recipeId = 3
    try {
      await fetch(`http://localhost:3000/recipes/${recipeId}`, {
        method: "DELETE",
      });
      fetchRecipes()
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const UpdateItem = async () => {
    const recipeId = 3

    const updatedRecipe = {
      "id": "3",
      "name": "Test Data Updated",
    }

    try {
      const response = await fetch(`http://localhost:3000/recipes/${recipeId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedRecipe),
      });
      const data = await response.json();
      fetchRecipes()
    } catch (error) {
      console.error("Error:", error);
    }
  }


  return (
    <div className="App">
      
      <button onClick={AddItem}>Post</button>
      <button onClick={UpdateItem} >Update</button>
      <button onClick={DeleteItem}>Delete</button>
      <br/>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>{recipe.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Recipes