import {createContext, useContext, useState} from "react";

const AppContext = createContext({
    profile: null,
    movies: []
});

export const useAppState = (reducer) => {
    const {state} = useContext(AppContext);
    return reducer(state);
}

export const useDispatch = () => {
    const {dispatch} = useContext(AppContext);
    return dispatch;
}

const AppProvider = ({children}) => {

    const [state, setState] = useState({
        profile: null,
        uiLoading: false,
        movies: []
    });

    const dispatch = (state) => {
        setState(currentState => {
            return {
                ...currentState,
                ...state
            };
        });
    }

    return (
        <AppContext.Provider value={{state, dispatch}}>
            {children}
        </AppContext.Provider>
    );
}
export default AppProvider;
