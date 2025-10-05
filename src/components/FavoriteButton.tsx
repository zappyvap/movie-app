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
    <div className="movie-list-container">
        {favoritesList.map((m)=>(
            <FavoriteMovies
                key={m.id}
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