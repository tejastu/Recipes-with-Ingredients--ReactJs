import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import "./App.css";
import Axios from "axios";

function App() {
   const [search, setSearch] = useState("Paneer");
   const [recipes, setRecipes] = useState([]);

   const APP_ID = "a7118006";
   const APP_KEY = "0ccf20b10048483955e4bdfa19722f18";

   useEffect(() => {
      getRecipes();
   }, []);

   const getRecipes = async () => {
      const result = await Axios.get(
         `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );

      setRecipes(result.data.hits);
   };

   const onInputChange = (e) => {
      setSearch(e.target.value);
   };

   const onClickSearch = () => {
      getRecipes();
   };
   return (
      <div className='App'>
         <Header search={search} onInputChange={onInputChange} onClickSearch={onClickSearch} />
         <div className='container'>
            <Recipes recipes={recipes} />
         </div>
      </div>
   );
}

export default App;
