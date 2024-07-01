import React from 'react';

const Barra = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div>
      <input 
        type="text" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        placeholder="Search for characters" 
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Barra;