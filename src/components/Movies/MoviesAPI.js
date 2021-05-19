
export const fetchMovies = dispatch => {

    dispatch({
        uiLoading: true
    });

    fetch('https://noroff-movie-catalogue.herokuapp.com/v1/movies')
        .then(r => r.json())
        .then(response => {
            dispatch({
                movies: response.data,
                uiLoading: false,
            });
        })
        .catch(error => {
           dispatch({
               uiLoading: false,
               error: error.message
           });
        });
}
