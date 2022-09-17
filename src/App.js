import React, { useState, useEffect } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoader, setIsLoader] = useState(false);
  const [error, setError] = useState(null);
  const [stop, setStop] = useState(null);

  useEffect(() => {});

  async function fetchMoviesHandler() {
    setIsLoader(true);
    setError(null);
    setStop(null);
    try {
      const response = await fetch("https://swapi.py4e.com/api/film/");
      if (!response.ok) {

        throw new Error("Something went wrong ....Retrying");
      }
      

      const data = await response.json();

      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      setMovies(transformedMovies);
      setIsLoader(false);
    } catch (error) {
      setError(error.message);
      const interval = setInterval(async() => {
        await fetch("https://swapi.py4e.com/api/films/");
      }, 1000);
      setStop(interval);
      setIsLoader(false);
    }
  }

  const stopRetryingHandler = () => {
    console.log(stop);
    clearInterval(stop);
  };

  let content = <p>Found no movies</p>;
  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoader) {
    content = <p>Loading...</p>;
  }
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
        <button onClick={stopRetryingHandler}>Cancel</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
