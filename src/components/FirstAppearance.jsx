import { getEpisodeImage } from '../services/api.js'

function FirstAppearance({ episode }) {
    return (
        <div className="episode">
            <h3>Primera aparición</h3>

            <img src={getEpisodeImage(episode.image_path)} alt={episode.name} />

            <h4>{episode.name}</h4>

            <p><strong>Temporada:</strong> {episode.season}</p>
            <p><strong>Episodio:</strong> {episode.episode_number}</p>
            <p><strong>Fecha:</strong> {episode.airdate}</p>
            <p>{episode.synopsis}</p>
        </div>
    )
}

export default FirstAppearance