import '../styles/CharacterInfo.css'

function CharacterInfo({ character }) {
    if (!character) {
        return null
    }

    return (
        <div className="info">
            <p><strong>Edad:</strong> {character.age || "No disponible"}</p>
            <p><strong>Fecha de nacimiento:</strong> {character.birthdate || "No disponible"}</p>
            <p><strong>Género:</strong> {character.gender || "No disponible"}</p>
            <p><strong>Ocupación:</strong> {character.occupation || "No disponible"}</p>
            <p><strong>Estado:</strong> {character.status || "No disponible"}</p>
        </div>
    )
}

export default CharacterInfo