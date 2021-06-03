import {useEffect} from "react";
import {fetchMovies} from "./MoviesAPI";
import {useMovies} from "../../context/MoviesContext";
import {useUiLoading} from "../../context/UiLoadingContext";

const Movies = () => {

    console.log('Movies.render()');

    const {movies, setMovies} = useMovies();
    const {uiLoading, setUiLoading} = useUiLoading();

    useEffect(() => {
        setUiLoading(true);
        fetchMovies()
            .then(response => {
                setMovies(response.data);
            })
            .catch(error => {

            })
            .finally(() => {
                setUiLoading(false);
            });
    }, [setUiLoading, setMovies])

    return (
        <ul>
            {uiLoading && <p>Loading your movies...</p>}
            {movies.map(movie => <li key={movie.id}>{movie.title}</li>)}
        </ul>
    )
}
export default Movies;
