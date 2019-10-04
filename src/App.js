import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {
  const APP_ID = '81be816a';
  const APP_KEY = '89faa0a4ffe6d67b4e2bc865d5cb4c33';

  const [myrecipes, setMyrecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');


  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setMyrecipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  }

  return (
    <div className="App">
      <h1>Recipe Search Using Third Party API</h1>

      <div className="app_search">
        <form onSubmit={getSearch} className="search_form">
          <input className="search_input" type="text" value={search} onChange={updateSearch} />
          <button className="search_btn" type="submit">
            Search
          </button>
        </form>
      </div>
      <div className="app_listings">

        {
          myrecipes.map(recipe => (
            <Recipe
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              image={recipe.recipe.image}
              calories={recipe.recipe.calories}
              src={recipe.recipe.url}
              ingredients={recipe.recipe.ingredients}
            />
          )
          )}

      </div>
    </div>
  );
}

export default App;
