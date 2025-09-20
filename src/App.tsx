import { useState} from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Movie from './components/Movie';
import MovieDetail from './components/MovieDetail';

interface MovieData { // interface that describes movie data
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  overview: string;
  vote_average: number;
}

const App = () => {
  const [query, setQuery] = useState(''); // variables to set the searchbar
  const [movies, setMovies] = useState<MovieData[]>([]); // setting the movie array variables
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieSelect = (movie) => { // uses function to set the selected movie
    setSelectedMovie(movie);
  };

  const handleBackToSearch = () => { // function for back to search button that puts the selected movie to null
    setSelectedMovie(null);
  };

  return (
    <>
      <h1>Movie Catalog</h1>
      {selectedMovie ? ( // shows this if someone selects a movie
        <MovieDetail movie={selectedMovie} handleBackToSearch={handleBackToSearch}/>
      ) : ( // shows this otherwise
        /**
         * 
         * What this block of code does below:
         * 
         * Makes a searchbar component and passes in the query and the functions
         * defined for it
         * 
         * Makes a div that holds the first 3 results of the movie array and shows
         * the poster and the title of the movie. It also has an onClick function that
         * will change the selectedMovie variable making this code go away and show the code
         * that is the true path of the ternary expression.
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
  );
};

export default App;