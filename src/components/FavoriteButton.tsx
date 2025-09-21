import Movie from "./Movie";
import FavoriteMovies from "./FavoriteMovies";
import { useState } from "react";

interface Props{
    favoritesList : any[];
    handleMovieSelect : (movie : any) => void;
    favoritePressed : boolean;
    setFavoritePressed: (x:boolean) => void;
    setFavoritesList : any;
    handleBackToSearch : any;
}


const FavoriteButton : React.FC<Props> = ({favoritesList,setFavoritesList,setFavoritePressed}) => {

    const handleBackToSearch = () =>{
        setFavoritePressed(false);
    }
    const [toggleButton,setToggleButton] = useState(true);
  return (
    <div>{ toggleButton && (
        <button onClick={handleBackToSearch}>Back To Search</button>    
    )}
        {favoritesList.map((m)=>(
            <FavoriteMovies
                handleBackToSearch={handleBackToSearch}
                movie={m}
                setFavoritesList={setFavoritesList}
                setToggleButton={setToggleButton}
                
            />
        ))}
    </div>
  )
}

export default FavoriteButton