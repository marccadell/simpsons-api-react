import { getCharacterImage } from '../services/api.js'
import CharacterInfo from './CharacterInfo.jsx'
import CharacterPhrases from './CharacterPhrases.jsx'
import FirstAppearance from './FirstAppearance.jsx'
import '../styles/CharacterCard.css'

function CharacterCard({ character }) {
    return (
        <section className="card">
            <img
                src={getCharacterImage(character.portrait_path)}
                alt={character.name}
            />

            <h2>{character.name}</h2>

            <p>{character.description || "Descripción no disponible"}</p>

            <CharacterInfo character={character} />

            <CharacterPhrases phrases={character.phrases} />

            <FirstAppearance episode={character.first_appearance_ep} />
        </section>
    )
}

export default CharacterCard