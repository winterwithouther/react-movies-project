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
                 console.error("Error loading popular movies:", err)
                 setErr("Failed to load popular movies.")
            }
            finally {
                setLoading(false)
            }
        }

        loadPopularMovies()
    }, [])

    const handleSearch = async (e) => {
        e.preventDefault()

        if (!searchQuery.trim()) return
        if (loading) return

        setLoading(true)
        
        try {
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
            setErr(null)
        } catch (err) {
            console.error("Error during search:", err)
            setErr("Search failed.")
        } finally {
            setLoading(false)
        }


        setSearchQuery("")
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

            {err && <div className="error">{err}</div>}

            {loading ? (
                <div className="loading">Loading...</div>
            ) :
                (
                     <div className="movies-grid">
                        {movies.map(movie => 
                            <MovieCard movie={movie} key={movie.id}/>
                        )}
                    </div>
                )
            }

           
        </div>
    )
}

export default Home