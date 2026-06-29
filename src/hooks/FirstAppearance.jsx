import { getEpisodeImage } from '../services/api.js'

function FirstAppearance({ episode }) {
    if (!episode) {
        return null
    }

    return (
        <div className="episode">
            <h3>Primera aparición</h3>

            {episode.image_path && (
                <img src={getEpisodeImage(episode.image_path)} alt={episode.name} />
            )}

            <h4>{episode.name || "Nombre no disponible"}</h4>

            <p><strong>Temporada:</strong> {episode.season || "No disponible"}</p>
            <p><strong>Episodio:</strong> {episode.episode_number || "No disponible"}</p>
            <p><strong>Fecha:</strong> {episode.airdate || "No disponible"}</p>
            <p>{episode.synopsis || "Sinopsis no disponible"}</p>
        </div>
    )
}

export default FirstAppearance