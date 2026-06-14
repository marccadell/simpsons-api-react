import '../styles/CharacterPhrases.css'

function CharacterPhrases({ phrases }) {
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