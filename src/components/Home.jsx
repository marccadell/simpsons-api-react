import { useState, useEffect, useRef } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

import CharacterProfile from '../hooks/CharacterProfile.jsx'
import { Loading } from './Loading.jsx'
import { getCharacter, getCharacterImage, getCharactersByPage } from '../services/api.js'

import '../styles/Home.css'


const CHARACTERS_TO_SHOW = 30

function Home() {
    const loadingRef = useRef(false)
    const [characters, setCharacters] = useState([])
    const [nextPage, setNextPage] = useState(1)
    const [totalPages, setTotalPages] = useState(null)
    const [error, setError] = useState("")
    const [search, setSearch] = useState("")
    const [results, setResults] = useState([])
    const [selectedCharacter, setSelectedCharacter] = useState(null)

    useEffect(() => {
        loadCharacters(CHARACTERS_TO_SHOW)
    }, [])

    async function loadCharacters(numberToShow) {
        if (loadingRef.current) {
            return
        }

        if (totalPages !== null && nextPage > totalPages) {
            return
        }

        loadingRef.current = true
        setError("")

        try {
            let newCharacters = []
            let currentPage = nextPage
            let pages = totalPages
            let totalLoaded = characters.length
            const totalToLoad = characters.length + numberToShow

            while (totalLoaded < totalToLoad && (pages === null || currentPage <= pages)) {
                const data = await getCharactersByPage(currentPage)
                const pageCharacters = data.results || []

                newCharacters = [...newCharacters, ...pageCharacters]
                totalLoaded = totalLoaded + pageCharacters.length
                pages = data.pages
                currentPage++
            }

            const orderedCharacters = [...characters, ...newCharacters].sort((a, b) => a.id - b.id)

            setCharacters(orderedCharacters)
            setNextPage(currentPage)
            setTotalPages(pages)
        } catch {
            setError("No se pudieron cargar los personajes")
        } finally {
            loadingRef.current = false
        }
    }

    function showMoreCharacters() {
        loadCharacters(CHARACTERS_TO_SHOW)
    }

    function searchCharacter(e) {
        const text = e.target.value
        setSearch(text)

        if (text === "") {
            setResults([])
            return
        }

        const filteredCharacters = characters.filter(character =>
            character.name.toLowerCase().includes(text.toLowerCase())
        )

        setResults(filteredCharacters.slice(0, 10))
    }

    function selectCharacter(character) {
        setError("")

        getCharacter(character.id)
            .then(data => {
                setSelectedCharacter(data)
                setSearch(data.name)
                setResults([])
            })
            .catch(() => {
                setError("No se pudo cargar el perfil del personaje")
            })
    }

    function backToHome() {
        setSelectedCharacter(null)
        setSearch("")
        setResults([])
    }

    const hasMoreCharacters = totalPages === null || nextPage <= totalPages

    if (selectedCharacter) {
        return (
            <main className='app'>
                <CharacterProfile
                    character={selectedCharacter}
                    onBack={backToHome}
                />
            </main>
        )
    }

    return (
        <main className='app'>
            <img src='src/assets/imgs/logo-simpsons.png' className='container-logo' alt='Logo The Simpsons'/>

            <div className="search-box">
                <input
                    type="text"
                    value={search}
                    onChange={searchCharacter}
                    placeholder="Buscar personaje..."
                />

                {results.length > 0 && (
                    <div className="results">
                        {results.map(character => (
                            <button
                                key={character.id}
                                onClick={() => selectCharacter(character)}
                            >
                                {character.name}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {error && <p className="message error-message">{error}</p>}

            <InfiniteScroll
                dataLength={characters.length}
                next={showMoreCharacters}
                hasMore={hasMoreCharacters}
                loader={<Loading />}
                endMessage={<p className="message">No hay más personajes</p>}
            >
                <section className="characters-grid">
                    {characters.map(character => (
                        <button
                            className="character-item"
                            key={character.id}
                            onClick={() => selectCharacter(character)}
                        >
                            <img
                                src={getCharacterImage(character.portrait_path)}
                                alt={character.name}
                            />
                            <h2>{character.name}</h2>
                        </button>
                    ))}
                </section>
            </InfiniteScroll>
        </main>
    )
}

export default Home;