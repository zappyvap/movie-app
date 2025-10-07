import { useState } from "react";
import "./Home.css";
import SearchBar from "./components/SearchBar";
import Movie from "./components/Movie";
import MovieDetail from "./components/MovieDetail";
import FavoriteButton from "./components/FavoriteButton";

export interface MovieData {
  // interface that describes movie data
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  overview: string;
  vote_average: number;
}

const Home = () => {
  const [query, setQuery] = useState(""); // variables to set the searchbar
  const [movies, setMovies] = useState<MovieData[]>([]); // setting the movie array variables
  const [selectedMovie, setSelectedMovie] = useState<MovieData | null>(null); // variables for when user clicks on movie
  const [favoritesList, setFavoritesList] = useState<MovieData[]>([]); // array for when the user clicks on the favorites button
  const [favoritePressed, setFavoritePressed] = useState(false); // toggle variable if the favorite button is pressed

  const handleMovieSelect = (movie: MovieData) => {
    // uses function to set the selected movie
    setSelectedMovie(movie);
  };

  const handleFavoriteClicked = () => {
    setFavoritePressed(true);
  };
  const handleBackToSearch = () => {
    // function for back to search button that puts the selected movie to null
    setSelectedMovie(null);
  };

  const handleBackToSearchFavorite = () =>{
    setFavoritePressed(false);
  }
  return (
    <>
      <div className="header-container">
        <h1 className="header-title">Movie Catalog</h1>
      </div>
      {favoritePressed ? (
      <>
        <button onClick={handleBackToSearchFavorite}>Back To Search</button> 
        <FavoriteButton setFavoritesList= {setFavoritesList} handleBackToSearch={handleBackToSearch} setFavoritePressed={setFavoritePressed} favoritePressed = {favoritePressed}favoritesList={favoritesList} handleMovieSelect={handleMovieSelect} />
      </>
      ) : (
        <>
          {selectedMovie ? ( // shows this if someone selects a movie
            <MovieDetail
              movie={selectedMovie}
              handleBackToSearch={handleBackToSearch}
              setFavoritesList={setFavoritesList}
            />
          ) : (
            <>
              <div className="search-favorites-container">
                <SearchBar query={query} setQuery={setQuery} setMovies={setMovies} />
                <button onClick={handleFavoriteClicked} className="favorite-button">
                  Favorites
                </button>
              </div>
              <div className="movie-list-container">
                {movies.slice(0, 3).map((m) => (
                  <Movie
                    key={m.id}
                    title={m.title}
                    poster={m.poster_path}
                    onClick={() => handleMovieSelect(m)}
                  />
                ))}
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Home;