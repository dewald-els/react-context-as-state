import {createContext, useContext, useState} from "react";

const MoviesContext = createContext(null);

export const useMovies = () => {
    return useContext(MoviesContext);
}

export const MoviesProvider = ({children}) => {
    const [movies, setMovies] = useState([]);
    return (
        <MoviesContext.Provider value={{movies, setMovies}}>
            {children}
        </MoviesContext.Provider>
    )
}
