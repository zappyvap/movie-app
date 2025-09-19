import { useState } from 'react';
import './App.css'
import SearchBar from './components/SearchBar'


const App = () => {
  const [query, setQuery] = useState('');
  return (
    <>
    <h1>Movie Catalog</h1>
    <SearchBar query = {query} setQuery={setQuery}></SearchBar>
    </>
  )
}

export default App
