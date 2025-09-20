import React from "react";
import "./Movie.css";

interface Props {
  title: string;
  poster: string;
  onClick: () => void;
}


const Movie: React.FC<Props> = ({ title, poster, onClick }) => {
  return (
    <div className="movie-card" onClick={onClick}>
      <img src={`https://image.tmdb.org/t/p/w500${poster}`} alt={title} width="300px" />
      <h1 className="movie-title">{title}</h1>
    </div>
  );
};

export default Movie;