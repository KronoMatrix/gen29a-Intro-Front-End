import { useEffect, useState } from "react"
import { getAllCharacters } from "../services/characterServices"
import PersonajesList from "../components/Header/PersonajesList"
import PersonajeCard from "../components/PersonajeCard"

const Characters = () => {
  const [personajes, setPersonajes] = useState([])

  const getCharactersData = async () => {
    try {
      const response = await getAllCharacters()
      const { results } = response.data
      setPersonajes(results)
    } catch (error) {
      console.log('Ocurrió un error', error);
    }
  }

  useEffect(() => {
    getCharactersData()
  }, [])

  return (
    <div className="bg-body-tertiary">
      <h1 className="text-center">Characters</h1>

      <PersonajesList>
        {personajes.map((personaje) => (<PersonajeCard 
        key={personaje.id} 
        name={personaje.name} 
        image={personaje.image}
        species={personaje.species}
        status={personaje.status}
        gender={personaje.gender}/>))}
      </PersonajesList>
    </div>
  )
}

export default Characters