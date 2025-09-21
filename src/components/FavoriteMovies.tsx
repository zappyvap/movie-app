import { useState } from "react";
import "./Movie.css";
import MovieDetail from "./MovieDetail";

interface Props {
  handleBackToSearch: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  movie: any;
  setFavoritesList : (movie : any) => void;
  setToggleButton : (x : boolean) =>void;
}

const FavoriteMovies: React.FC<Props> = ({movie,setFavoritesList,handleBackToSearch,setToggleButton}) => {
  const[clickedMovie,setClickedMovie] = useState(false);
  const handleClick = () =>{
    setToggleButton(false);
    setClickedMovie(true);
  }
  return (
    <>
      {clickedMovie ? (
        <MovieDetail setFavoritesList={setFavoritesList} handleBackToSearch={handleBackToSearch} movie = {movie}></MovieDetail>
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