import React, { useEffect, useState } from 'react';
import Recipe from './recipe';
import './recipe.css';

function App(props) {

	const APP_ID = "0a80c3a8";
	const APP_KEY = "03c8611f5870f7bc17c4cf28e84825f0";
	const [search, setSearch] = useState('')
	const [query, setQuery] = useState('chicken')
	const [recipes, setRecipes] = useState([])





	useEffect(() => {
		getData()
	},
		[query]
	)

	const getData = async () => {
		const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
		const data = await response.json();

		setRecipes(data.hits);
		console.log(recipes);
	}

	const updateSearch = (event) => {
		setSearch(event.target.value)
		console.log(search)
	}

	const getSearch = (event) => {
		event.preventDefault();
		setQuery(search);
		setSearch("");
	}

	const getCatSearch = (Categ) => {
		setSearch(Categ)
		setQuery(search)
	}



	return (

		<div className="App">

			<form onSubmit={getSearch} className="search-form">
				<input className="search-bar" type="text" value={search} onChange={updateSearch} />
				<button className="search-button" type="submit">
					Search
  	</button>
			</form>





			<div className="recipes">
				{recipes.map(recipe => (
					<Recipe key={recipe.recipe.label}
						title={recipe.recipe.label} calories={recipe.recipe.calories}
						image={recipe.recipe.image}
						ingredients={recipe.recipe.ingredients} />
				))}
			</div>


		</div>)
}



export default App;
