import '../styles/CharacterPhrases.css'

function CharacterPhrases({ phrases }) {
    if (!phrases || phrases.length === 0) {
        return (
            <div className="phrases">
                <h3>Frases</h3>
                <p>No hay frases disponibles</p>
            </div>
        )
    }

    return (
        <div className="phrases">
            <h3>Frases</h3>

            {phrases.map((phrase, index) => (
                <p key={index}>"{phrase}"</p>
            ))}
        </div>
    )
}

export default CharacterPhrases