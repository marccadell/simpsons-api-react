const API_URL = "https://thesimpsonsapi.com/api"
const IMAGE_URL = "https://cdn.thesimpsonsapi.com"

export function getCharacter(id) {
    return fetch(`${API_URL}/characters/${id}`).then(res => res.json())
}

export function getCharacterImage(path) {
    return `${IMAGE_URL}/500${path}`
}

export function getEpisodeImage(path) {
    return `${IMAGE_URL}/200${path}`
}