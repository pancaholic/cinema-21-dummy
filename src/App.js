import "./App.css";
import CinemaLogo from "./assets/Cinema_XXI.png";
import { getMovieList, searchMovie } from "./api.js";
import { useEffect, useState } from "react";

const App = () => {
  const [nowShowingMovies, setNowShowingMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setNowShowingMovies(result);
    });
  }, []);

  const NowShowingMovieList = () => {
    return nowShowingMovies.map((movie, i) => {
      return (
        <div className="Movie-wrapper" key={i}>
          <div className="Movie-title">{movie.title}</div>
          <img
            className="Movie-image"
            src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
          />
          <div className="Movie-date">{movie.release_date}</div>
          <div className="Movie-rating">{movie.vote_average}</div>
        </div>
      );
    });
  };

  const search = (q) => {
    console.log({ q });
  };

  console.log(nowShowingMovies);

  return (
    <div className="App">
      <header className="App-header">
        <img className="Cinema-logo" src={CinemaLogo} alt="Cinema-logo" />
        <input
          placeholder="Search movies...."
          className="Movie-search"
          onChange={({ target }) => search(target.value)}
        />
      </header>
      <section className="main">
        <div className="Movie-container">
          <NowShowingMovieList />
        </div>
      </section>
    </div>
  );
};

export default App;
