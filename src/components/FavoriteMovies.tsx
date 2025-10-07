import { useState } from "react";
import "./Movie.css";
import type { MovieData } from "../Home";

interface Props {
  handleBackToSearch: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  movie: any;
  setFavoritesList : SetFavoritesList;
}

type SetFavoritesList = (
  // fixes type errors
  updater: (currFavs: MovieData[]) => MovieData[]
) => void;

const FavoriteMovies: React.FC<Props> = ({movie,setFavoritesList}) => {
  const[clickedMovie,setClickedMovie] = useState(false);

  const handleClick = () =>{
    setClickedMovie(true);
  }

  const handleUnfavorited = () =>{
    setFavoritesList((arr) =>{
        const index = arr.findIndex((favMovie) => favMovie.id === movie.id);      

        if (index > -1) {
          const newArr = [...arr];
          newArr.splice(index, 1);
          return newArr;
        }
        return arr;
    })
  }

  return (
    <>
      {clickedMovie ? (
        <div className="movie-detail">

          <div className="movie-content">
            <div className="left-column">
              <img
                className="movie-poster"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <h2 className="movie-title">{movie.title}</h2>
            </div>

            <div className="right-column">
                <button className="favorite-button" onClick={handleUnfavorited}>Unfavorite</button>
              <p>{movie.overview}</p>
              <p>Rating: {movie.vote_average}</p>
              <p>Release Date: {movie.release_date}</p>
            </div>
          </div>
        </div>
      ): (
        <div className="movie-card" onClick={handleClick}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            width="300px"
          />
          <h1 className="movie-title">{movie.title}</h1>
        </div>
      )}
    </>
  );
};

export default FavoriteMovies;