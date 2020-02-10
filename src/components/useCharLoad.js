import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useCharLoad(pageNumber){
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [characters, setCharacters] = useState([])
  const [hasMore, setHasMore] = useState(false)

  useEffect(() => {
    setCharacters([])
  }, [])

  useEffect(() => {
    setLoading(true)
    setError(false)
    let cancel
    axios({
      method: 'GET',
      url: 'https://rickandmortyapi.com/api/character/',
      params: {page: pageNumber},
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      setCharacters(prevCharacters => {
        return [...new Set([...prevCharacters, ...res.data.results])]
      })
      setHasMore(res.data.results > 0)
      setLoading(false)
    }).catch(e => {
      if(axios.isCancel(e)) return
      setError(true)
    })
    return () => cancel()
  }, [pageNumber])
  return {loading, error, characters, hasMore}
}