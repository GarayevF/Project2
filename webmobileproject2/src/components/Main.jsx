import React from "react";
import "../styles/Main.css";

function Main() {
  const featuredRecipe = {
    title: "Spaghetti Carbonara",
    description: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
    difficulty: "Medium",
    lastUpdated: "2025-01-01",
  };

  const projects = [
    {
      title: "Portfolio Website",
      description: "A responsive portfolio showcasing my projects and skills.",
      link: "https://github.com/your-username/portfolio",
    },
    {
      title: "E-Commerce Store",
      description: "A fully functional e-commerce store built with React and Firebase.",
      link: "https://github.com/your-username/ecommerce-store",
    },
    {
      title: "Weather App",
      description: "A weather forecasting app that uses OpenWeatherMap API.",
      link: "https://github.com/your-username/weather-app",
    },
    {
      title: "Chat Application",
      description: "A real-time chat app using WebSockets.",
      link: "https://github.com/your-username/chat-app",
    },
    {
      title: "Task Manager",
      description: "An app to manage daily tasks with a focus on productivity.",
      link: "https://github.com/your-username/task-manager",
    },
    // Add more projects here
  ];

  return (
    <div className="home-container">
      <section className="welcome-section">
        <h1>Welcome to Recipe Manager App</h1>
        <p>
          You can create, view, edit, delete, and organize your
          favorite recipes!
        </p>
      </section>

      <section className="featured-recipe-section">
        <h2>Featured Recipe</h2>
        <div className="recipe-card">
          <h3>{featuredRecipe.title}</h3>
          <p>{featuredRecipe.description}</p>
          <p>
            <strong>Difficulty:</strong> {featuredRecipe.difficulty}
          </p>
          <p>
            <strong>Last Updated:</strong> {featuredRecipe.lastUpdated}
          </p>
        </div>
      </section>

      <section className="projects-section">
        <h2 className="projects-heading">Projects from Web and Mobile 1 Course</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-item">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Main;
