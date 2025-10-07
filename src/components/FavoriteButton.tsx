import FavoriteMovies from "./FavoriteMovies";
import type { MovieData } from "../Home";

interface Props{
    favoritesList : MovieData[];
    handleMovieSelect : (movie : MovieData) => void;
    favoritePressed : boolean;
    setFavoritePressed: (x:boolean) => void;
    setFavoritesList : SetFavoritesList;
    handleBackToSearch : unknown;
}

type SetFavoritesList = (
  // fixes type errors
  updater: (currFavs: MovieData[]) => MovieData[]
) => void;

const FavoriteButton : React.FC<Props> = ({favoritesList,setFavoritesList,setFavoritePressed}) => {

    const handleBackToSearch = () =>{
        setFavoritePressed(false);
    }
    
  return (
    <div className="movie-list-container">
        {favoritesList.map((m)=>(
            <FavoriteMovies
                key={m.id}
                handleBackToSearch={handleBackToSearch}
                movie={m}
                setFavoritesList={setFavoritesList}                
            />
        ))}
    </div>
  )
}

export default FavoriteButton