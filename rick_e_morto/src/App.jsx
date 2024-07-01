import React from 'react';
import axios from 'axios';
import Barra from './components/Barra';
import Lista from './components/Lista';

const App = () => {
  const [characters, setCharacters] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const fetchCharacters = (name) => {
    setLoading(true);
    setError(null);

    axios.get(`https://rickandmortyapi.com/api/character/?name=${name}`)
      .then(response => {
        setCharacters(response.data.results || []);
        setLoading(false);
      })
      .catch(error => {
        setError('Character not found');
        setLoading(false);
      });
  };

  return (
    <div>
      <h1>Rick and Morty Character Search</h1>
      <Barra onSearch={fetchCharacters} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <Lista characters={characters} />
    </div>
  );
};

export default App;