import React, {useState} from 'react';

const MovieList = (props) => {
	const FavouriteComponent = props.favouriteComponent;
  
	const [hoveredMovies, setHoveredMovies] = useState({});
  
	const handleMouseEnter = async (movie) => {
	  const details = await props.getMovieDetails(movie.imdbID);
	  setHoveredMovies((prev) => ({ ...prev, [movie.imdbID]: details }));
	};
  
	const handleMouseLeave = (movie) => {
	  setHoveredMovies((prev) => {
		const newState = { ...prev };
		delete newState[movie.imdbID];
		return newState;
	  });
	};
  
	return (
	  <>
		{props.movies.map((movie, index) => (
		  <div
			className='image-container d-flex justify-content-start m-3'
			onMouseEnter={() => handleMouseEnter(movie)}
			onMouseLeave={() => handleMouseLeave(movie)}
		  >
			<img src={movie.Poster} alt='movie'></img>
			<div
			  onClick={() => props.handleFavouritesClick(movie)}
			  className='overlay d-flex align-items-center justify-content-center'
			>
			  <FavouriteComponent />
			</div>
			{hoveredMovies[movie.imdbID] && (
			  <div className='overlay-details'>
				<h3>{hoveredMovies[movie.imdbID].Title}</h3>
				<p>{hoveredMovies[movie.imdbID].Year}</p>
				<p>{hoveredMovies[movie.imdbID].Plot}</p>
			  </div>
			)}
		  </div>
		))}
	  </>
	);
  };
  
  export default MovieList;
  