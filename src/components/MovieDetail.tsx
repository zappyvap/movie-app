import "./MovieDetail.css";

interface Props {
  // takes in the movie array and the back button function
  handleBackToSearch: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  movie: any;
  setFavoritesList : (movie : any) => void;
}

/**
 * This is what shows when there is a selected movie.
 * The breaking up of the divs is just to make the css easier.
 * If there are different classes its easier to format.
 */
const MovieDetail: React.FC<Props> = ({ handleBackToSearch, movie,setFavoritesList}) => {

    const handleFavorite = () =>{
        setFavoritesList(currFavs => {
          if(!currFavs.some((favMovie) => favMovie.id === movie.id)){
            return [...currFavs, movie];
          }
          return currFavs;
        });
    }
    
  return (
    <div className="movie-detail">
      <button onClick={handleBackToSearch} className="back-to-search-button">
        Back to Search
      </button>

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
            <button className="favorite-button" onClick={handleFavorite}>Favorite</button>
          <p>{movie.overview}</p>
          <p>Rating: {movie.vote_average}</p>
          <p>Release Date: {movie.release_date}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
