import { useState } from 'react'
import './App.css'

function App() {

  return (
    <main className='app'>
      <h1>Personajes de Los Simpsons</h1>

      <input type="number" value={characterId} onChange={(e) => setCharacterId(e.target.value)} />
      <button onClick={loadCharacter}>Buscar Personaje</button>

      {character && <CharacterCard character={character} />}

    </main>
  )
}

export default App;
