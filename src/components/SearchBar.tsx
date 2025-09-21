import "./SearchBar.css";

interface Props {
  // props that are inputted from app.tsx
  query: string;
  setQuery: (value: string) => void;
  setMovies: (movies: []) => void;
}

const SearchBar: React.FC<Props> = ({ query, setQuery, setMovies }) => {
  const apiAuthorization = import.meta.env.VITE_AUTHORIZATION;
  const onClick = () => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${query
      .split(" ") // splits the movie name and adds %20 in between words to make the URL complete
      .join("%20")}&include_adult=true&language=en-US&page=1`;
    const options = {
      // this just uses an authorization key so I can fetch the data
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
        apiAuthorization,
      },
    };
    fetch(url, options)
      .then((res) => res.json()) // gets the json
      .then((json) => {
        // takes the results of the json and adds it to the movie list
        if (json.results.length === 0) {
          console.log("No Results Found, Please Try Again.");
          setMovies([]);
        } else {
          setMovies(json.results);
        }
      })
      .catch((err) => console.error(err));
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value); // function that changes the textbox text
  };
  return (
    // basic textbox setup
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleChange}
        className="search-input"
      />
      <button onClick={onClick} className="search-button">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
