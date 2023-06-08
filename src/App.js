import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/movielist.js';
import MovieListHeading from './components/movielistheading';
import SearchBox from './components/searchbox';
import AddFavourites from './components/addfavourites';
import RemoveFavourites from './components/removefavourites';

const App = () => {
	const [movies, setMovies] = useState([]);
	const [favourites, setFavourites] = useState([]);
	const [searchValue, setSearchValue] = useState('');
	const apiKey = '62ddf7ce';

	const getMovieRequest = async (searchValue) => {
    	const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=${apiKey}`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	const getMovieDetails = async (movieId) => {
		const url = `http://www.omdbapi.com/?i=${movieId}&apikey=${apiKey}`;
	  
		const response = await fetch(url);
		const responseJson = await response.json();
	  
		return responseJson;
	  };

	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);

	const addFavouriteMovie = (movie) => {
		const movieExists = favourites.some(
		  (favourite) => favourite.imdbID === movie.imdbID
		);
	  
		if (movieExists) {
		  alert('This movie is already in your favourites list.');
		} else {
		  const newFavouriteList = [...favourites, movie];
		  setFavourites(newFavouriteList);
		}
	  };

	const removeFavouriteMovie = (movie) => {
		const newFavouriteList = favourites.filter(
			(favourite) => favourite.imdbID !== movie.imdbID
		);

		setFavourites(newFavouriteList);
	};

	return (
		<div className='container-fluid movie-app'>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading='Movies' />
				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			</div>
			<div className='row'>
				<MovieList
					movies={movies}
					handleFavouritesClick={addFavouriteMovie}
					favouriteComponent={AddFavourites}
					getMovieDetails={getMovieDetails}
				/>
			</div>
			<div className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeading heading='Favourites' />
			</div>
			<div className='row'>
				<MovieList
					movies={favourites}
					handleFavouritesClick={removeFavouriteMovie}
					favouriteComponent={RemoveFavourites}
					getMovieDetails={getMovieDetails}
				/>
			</div>
		</div>
	);
};

export default App;
