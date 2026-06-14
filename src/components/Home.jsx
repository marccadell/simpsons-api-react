import { useState } from 'react'

import CharacterCard from './CharacterCard.jsx'
import { getCharacter } from '../services/api.js'

import '../styles/Home.css'


function Home() {
    const [character, setCharacter] = useState(null)
    const [characterId, setCharacterId] = useState(1)

    function loadCharacter() {
        getCharacter(characterId)
            .then(data => {
                setCharacter(data)
            })
    }

    return (
        <main className='app'>
            <h1>Personajes de Los Simpsons</h1>

            <input type="number" value={characterId} onChange={(e) => setCharacterId(e.target.value)} />
            <button onClick={loadCharacter}>Buscar Personaje</button>

            {character && <CharacterCard character={character} />}

        </main>
    )
}

export default Home;