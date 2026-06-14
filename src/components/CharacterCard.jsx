const API_URL = "https://thesimpsonsapi.com/api";
const IMAGE_URL = "https://thesimpsonsapi.com";

export function getCharacter(id) {
    return fetch(`${API_URL}/characters/${id}`).then(res => res.json());
}

export function getCharacterImage(path) {
    if (!path) {
        return "";
    }

    return `${IMAGE_URL}${path}`;
}

