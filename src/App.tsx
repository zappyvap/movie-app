import { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Movie from './components/Movie';



interface MovieData {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  overview: string;
  vote_average: number;
}

const App = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState<MovieData[]>([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
  };

  const handleBackToSearch = () => {
    setSelectedMovie(null);
  };

  const MovieDetail = ({ movie }: { movie: MovieData }) => (
    <div className="movie-detail">
      <button onClick={handleBackToSearch}>Back to Search</button>
      <h2>{movie.title}</h2>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <p>{movie.overview}</p>
      <p>Rating: {movie.vote_average}</p>
      <p>Release Date: {movie.release_date}</p>
    </div>
  );

  return (
    <>
      <h1>Movie Catalog</h1>
      {selectedMovie ? (
        <MovieDetail movie={selectedMovie} />
      ) : (
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