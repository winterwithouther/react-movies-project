import React from "react"
import { useState, useEffect } from "react"
import MovieCard from "../components/MovieCard"
import "../css/Home.css"
import { searchMovies, getPopularMovies } from "../services/api"

function Home() {
    const [searchQuery, setSearchQuery] = useState("")
    const [movies, setMovies] = useState([])
    const [err, setErr] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            } catch (err) {
                console.log(err)
                setErr("Failed to load movies...")
            }
            finally {
                setLoading(false)
            }
        }

        loadPopularMovies()
    }, [])

    const handleSearch = (e) => {
        e.preventDefault()
        setSearchQuery("")
        alert(searchQuery)
    }

    return (
        <div className="home">
            <form className="search-form" onSubmit={handleSearch}>
                <input 
                    type="text" 
                    placeholder="Search for movies..." 
                    className="search-input" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>

            </form>
            <div className="movies-grid">
                {movies.map(movie => 
                    <MovieCard movie={movie} key={movie.id}/>
                )}
            </div>
        </div>
    )
}

export default Home