const API_URL = "https://thesimpsonsapi.com/api"
const IMAGE_URL = "https://cdn.thesimpsonsapi.com"

export function getCharacter(id) {
    return fetch(`${API_URL}/characters/${id}`).then(res => res.json())
}

export function getCharactersByPage(page) {
    return fetch(`${API_URL}/characters?page=${page}`).then(res => res.json())
}

export async function getAllCharacters() {
    let allCharacters = []
    let page = 1
    let totalPages = 1

    while (page <= totalPages) {
        const response = await fetch(`${API_URL}/characters?page=${page}`)
        const data = await response.json()

        allCharacters = [...allCharacters, ...data.results]
        totalPages = data.pages
        page++
    }

    return allCharacters
}

export function getCharacterImage(path) {
    if (!path) {
        return ""
    }

    return `${IMAGE_URL}/500${path}`
}

export function getEpisodeImage(path) {
    if (!path) {
        return ""
    }

    return `${IMAGE_URL}/200${path}`
}