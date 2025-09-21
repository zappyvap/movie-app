import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import Movie from "./components/Movie";
import MovieDetail from "./components/MovieDetail";
import FavoriteButton from "./components/FavoriteButton";

interface MovieData {
  // interface that describes movie data
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  overview: string;
  vote_average: number;
}

const App = () => {
  const [query, setQuery] = useState(""); // variables to set the searchbar
  const [movies, setMovies] = useState<MovieData[]>([]); // setting the movie array variables
  const [selectedMovie, setSelectedMovie] = useState<MovieData | null>(null);
  const [favoritesList, setFavoritesList] = useState<MovieData[]>([]);
  const [favoritePressed, setFavoritePressed] = useState(false);

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

  return ( // the beginning ternary is for if the favorites button is pressed
    <>
      <button onClick={handleFavoriteClicked}>Favorites</button>
      {favoritePressed ? (
        <FavoriteButton setFavoritesList= {setFavoritesList} handleBackToSearch={handleBackToSearch} setFavoritePressed={setFavoritePressed} favoritePressed = {favoritePressed}favoritesList={favoritesList} handleMovieSelect={handleMovieSelect} />

      ) : (
        <>
          <h1>Movie Catalog</h1>
          {selectedMovie ? ( // shows this if someone selects a movie
            <MovieDetail
              movie={selectedMovie}
              handleBackToSearch={handleBackToSearch}
              setFavoritesList={setFavoritesList}
            />
          ) : (
            /**
             *
             * What this block of code does below:
             *
             * Makes a searchbar component and passes in the query and the functions
             * defined for it
             *
             * Makes a div that holds the first 3 results of the movie array and shows
             * the poster and the title of the movie. It also has an onClick function that
             * will change the selectedMovie variable making this display go away and show the display
             * that is the true path of the ternary expression above.
             */
            <>
              <SearchBar query={query} setQuery={setQuery} setMovies={setMovies} />
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

export default App;