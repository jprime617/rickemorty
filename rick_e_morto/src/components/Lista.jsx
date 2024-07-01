import React from 'react';

const Lista = ({ characters }) => {
  return (
    <div>
      {characters.map(character => (
        <div key={character.id}>
          <h2>{character.name}</h2>
          <img src={character.image} alt={character.name} />
        </div>
      ))}
    </div>
  );
};

export default Lista;