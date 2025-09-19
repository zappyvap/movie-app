import { useState } from "react";
import Movie from "./Movie";

interface Props {
  query: string;
  setQuery: (value: string) => void;
}

const SearchBar: React.FC<Props> = ({ query, setQuery }) => {

  // this sets the movies from the json call and stores them in these variables so I can use a movie component in the return
  const [movies,setMovies] = useState<{id: number; title : string; poster_path: string}[]>([]);

  const onClick = () => {
    //this split join thing just gets rid of the space so the call works correctly
    const url = `https://api.themoviedb.org/3/search/movie?query=${query
      .split(" ")
      .join("%20")}&include_adult=true&language=en-US&page=1`;
    const options = {
      // this whole function takes in a header for the specific call and accesses my api key from it
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTAxMTA0ZDA0OTQ4NjE1Y2FlMWJkNWMyODMyYjU1ZSIsIm5iZiI6MTc1Nzg4OTg3Ny45ODQsInN1YiI6IjY4Yzc0NTU1MzZjMTBhMzZjODIyMDI3MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nArtvOEy7rgm-IwWbYbW5UcVcc9sZPqJ-zk1PTlCtWs",
      },
    };
    fetch(url, options) // gets the json
      .then((res) => res.json())
      .then((json) => {
        if (json.results.length === 0) {
          console.log("No Results Found, Please Try Again.");
          setMovies([]);
        } else {
          console.log(json);
          setMovies(json.results);
        }
      })
      .catch((err) => console.error(err));
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value); // changes the value of the query variable as someone types in the searchbar
  };
  return (

    <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleChange}
      />
      <button onClick={onClick}>Search</button>
      <div>
        {movies.slice(0,3).map((m) =>(//this is mapping the movies from the movie array
          <Movie
            key = {m.id}
            title = {m.title}
            poster = {`https://image.tmdb.org/t/p/w500${m.poster_path}`}
            //need to eventually add something if there isn't a poster
          />
        ))}
      </div>

    </div>
  );
};

export default SearchBar;
