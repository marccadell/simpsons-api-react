import CharacterCard from './CharacterCard.jsx'
import '../styles/CharacterProfile.css'

function CharacterProfile({ character, onBack }) {
    if (!character) {
        return null
    }

    return (
        <section className="profile">
            <button className="back-button" onClick={onBack}>
                Volver al listado
            </button>

            <CharacterCard character={character} />
        </section>
    )
}

export default CharacterProfile