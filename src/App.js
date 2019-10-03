import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const APP_ID = '81be816a';
  const APP_KEY = '89faa0a4ffe6d67b4e2bc865d5cb4c33';


  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch('https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}');
    const data = await response.json();
    console.log(data);
  }

  return (
    <div className="App">
      <h1>Recipe Search Using Third Party API</h1>

      <div className="app_search">
        <form className="search_form">
          <input className="search_input" type="text" />
          <button className="search_btn" type="submit">
            Search
          </button>
        </form>
      </div>
      <div className="app_listings">

      </div>
    </div >
  );
}

export default App;
