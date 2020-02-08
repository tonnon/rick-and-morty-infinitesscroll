import React, { useState, useEffect } from 'react';
import { CardGrid, Card } from './tableStyled.js';
import Navbar from '../Navbar/Navbar.js';
import api from '../../services/api.js';

const Table = () => {
  const [characters, setCharacters] = useState([]);
  const [numPages] = useState([26]);

  useEffect(() => {
    async function loadData() {
      for(var i = 0; i < numPages; i++){
        const apiResponse = await api.get(`?page=` + i);
        setCharacters(apiResponse.data.results);
      } 
    }
    loadData();
  }, [numPages]); 

  // Não há dependências, irá executar uma vez igual ao componentDidMount()
  
  // Recebe dois parêmetros. Uma função e um array de dependências.
  // Substitui os ciclos de vida do React, porém, são conceitos diferentes

  return (
    <div className="container">
      <Navbar/>
      <CardGrid>
        {characters.map(character => (
            <Card key={character.id}>
              <img src={character.image} alt={character.name} />
              <section>
                <header>
                  <h3>
                    <span>{character.id}</span> {character.name}
                  </h3>
                  <h4>
                    <span>{character.species} - {character.status}</span>
                  </h4>
                  <h4>
                    <span>{character.origin.name}</span>
                  </h4>
                </header>
              </section>
            </Card>
        ))};
      </CardGrid>
    </div>
  );
};

export default Table;