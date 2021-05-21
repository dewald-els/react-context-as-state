
export const fetchMovies = () => {
    return fetch('https://noroff-movie-catalogue.herokuapp.com/v1/movies')
        .then(r => r.json())
}
