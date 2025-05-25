import React from "react"
import { useState } from "react"
import MovieCard from "../components/MovieCard"
import "../css/Home.css"

function Home() {
    const [searchQuery, setSearchQuery] = useState("")

    const movies = [
        {id : 1, title: "John Wick", release_date: "2020"},  
        {id : 2, title: "Terminator", release_date: "1999"},
        {id : 3, title: "The Matrix", release_date: "1998"},
    ]

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