import {useAppState} from "../../AppContext";
const Movies = () => {

    console.log('Movies.render()');
    const movies = useAppState(state => state.movies);
    const uiLoading = useAppState(state => state.uiLoading);

    return (
        <ul>
            { uiLoading && <p>Loading your movies...</p> }
            {movies.map(m => <li key={m.id}>{m.title}</li>)}
        </ul>
    )
}
export default Movies;
