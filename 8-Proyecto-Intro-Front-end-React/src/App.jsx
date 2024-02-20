import { useEffect, useState } from 'react';
import './App.css'

function App() {

  const [peliculas, setpeliculas] = useState([])

  const obtenerPeliculas = async () => {
    const url = 'https://api.themoviedb.org/3/trending/all/week?api_key=3ce302271da4a1000763b026bd6d6a80'
    const res = await fetch (url)
    const data = await res.json()
    setpeliculas(data.results)
    console.log(data);

  }

  useEffect(() => {
    obtenerPeliculas()
  }, [])

  return (
    <div>
      {
        peliculas.map( pelicula => (
          <div key={pelicula.id}>
            <img src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`} alt={pelicula.title}></img>
            <p >{pelicula.title}</p>
          </div>
          
        ))
      }
    </div>
  )
}

export default App
