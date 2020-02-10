import React, { useState, useRef, useCallback } from 'react';
import { CardGrid, Card, Spinner } from './tableStyled.js';
import Navbar from '../Navbar/Navbar.js';
/* import api from '../../services/api.js'; */
import useCharLoad from '../useCharLoad.js'

const Table = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const {characters, hasMore, loading, error} = useCharLoad( pageNumber)

  const observer = useRef()
  const lastChar = useCallback(node => {
    if(loading) return
    if(observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting){
        setPageNumber(prevPageNumber => prevPageNumber + 1)
      }
    })
    if (node) observer.current.observe(node)
  }, [loading, hasMore])
  
  return (
    <div className="container">
      <Navbar/>
        <CardGrid>
        {characters.map((character, index) => {
          if(characters.length === index + 1){
            return <Card key={index} ref={lastChar}>
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
          } else {
            return <Card key={index}>
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
          }
        })}
      </CardGrid>
        <div>{loading && <Spinner/>}</div>
        <div>{error && 'Error...'}</div>
    </div>
  );
};

export default Table;