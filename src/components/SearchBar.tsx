import './SearchBar.css';

interface Props {
  query: string;
  setQuery: (value: string) => void;
  setMovies: (movies: []) => void;
}

const SearchBar: React.FC<Props> = ({ query, setQuery, setMovies }) => {

  const onClick = () => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${query
      .split(" ")
      .join("%20")}&include_adult=true&language=en-US&page=1`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTAxMTA0ZDA0OTQ4NjE1Y2FlMWJkNWMyODMyYjU1ZSIsIm5iZiI6MTc1Nzg4OTg3Ny45ODQsInN1YiI6IjY4Yzc0NTU1MzZjMTBhMzZjODIyMDI3MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nArtvOEy7rgm-IwWbYbW5UcVcc9sZPqJ-zk1PTlCtWs",
      },
    };
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
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
    setQuery(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleChange}
        className="search-input"
      />
      <button onClick={onClick} className="search-button">Search</button>
    </div>
  );
};

export default SearchBar;