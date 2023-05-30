# Movie Library

A responsive web app that allows users to browse and search for movies and add them to their favorites list. The app is built using JavaScript, React, CSS, and Bootstrap.

## Key Features

- Load and display a collection of 280,000+ movies.
- Real-time search functionality to find movies based on title.
- Integration with the OMDb (Open Movie Database) API to fetch movie information.
- Add movies to the favorites list.
- Remove movies from the favorites list.

## Installation and Usage

1. Clone this repository to your local machine.
2. Install the required dependencies
3. Start a local development server

## API Key

This project uses the OMDb API to fetch movie information. To make API requests, you'll need to obtain an API key from OMDb (http://www.omdbapi.com/). Once you have the API key, add it to the `getMovieRequest` function in the `App.js` file.

      const getMovieRequest = async (searchValue) => {
       const apiKey = 'YOUR_API_KEY';
       const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=${apiKey}`;
       // ...
      };

Replace 'YOUR_API_KEY' with your actual API key.

Note: This project is currently locally hosted, so it can only be used on your own machine.
