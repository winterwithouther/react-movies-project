const API_KEY = "fed7b430989626feb891d9f69e48aa1f"
const BASE_URL = "https://api.themoviedb.org/3"

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    const data = await response.json()
    return data.results
}

export const searchMOvies = async (query) => {
    const response = await fetch(`${BASE_URL}/search?api_key=${API_KEY}&query=${encodeURIComponent(
        query
    )}`)
    const data = await response.json()
    return data.results
}