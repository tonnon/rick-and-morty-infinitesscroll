import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './list.css';
import Navbar from '../Navbar/Navbar.js';
import api from '../../services/api.js';

const getClickablePages = (actualpage) => {
  const offsets = [0, 1, 2, 3, 4]; // Mostra a quantidade de links em tela
  return offsets.map(number => parseInt(actualpage, 10) + number); // Converte seu primeiro argumento para uma string, analisa, e retorna um inteiro
}

const getPage = (direction, actualpage) => {
  const nextPage = parseInt(actualpage, 10) + direction;
  return nextPage >= 0 ? nextPage : 1;
}

const List = ({ match }) =>{
  const [characters, setCharacters] = useState([]);
  const clickablePages = getClickablePages(Number(match.params.page) || 1);
  const page = Number(match.params.page) || 1;

  useEffect(() => {
    async function loadData() {
      const apiResponse = await api.get(`/?page=${page}`);

      setCharacters(apiResponse.data.results);
    }

    loadData();
  }, [match.params.page, page]); 

    return (
      <div className="container">
        <Navbar/>
        <div className="header">
          <ul className="pageNumberContainer">
            <Link to={`/${getPage(-1, page)}`}>
              <li className="direction"> prev </li>
            </Link>
            {clickablePages.map(pageNumber => (
              <Link to={`/${pageNumber}`} key={pageNumber}>
                <li className="pageNumber" actualpage={page ? 1 : undefined}>
                  {pageNumber}
                </li>
              </Link>
            ))}
            <Link to={`/${getPage(1, page)}`}>
              <li className="direction"> next </li>
            </Link>
          </ul>
        </div>  
        <ul className="cardGrid">
          {characters.map(character => (
              <li key={character.id} className="card">
                <img src={character.image} alt={character.name} />
                <section>
                  <header>
                    <h3>
                      <span>{character.id}</span> {character.name}
                    </h3>
                    <h4>
                      <span>{character.species} - {character.status}</span>
                    </h4>
                  </header>
                </section>
              </li>
          ))};
        </ul>
      </div>
    );
};

export default List;