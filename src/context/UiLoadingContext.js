import {createContext, useContext, useState} from "react";

const UiLoadingContext = createContext(false);

export const useUiLoading = () => {
    return useContext(UiLoadingContext);
}

export const UiLoadingProvider = ({children}) => {
    const [uiLoading, setUiLoading] = useState(false);
    return (
        <UiLoadingContext.Provider value={{uiLoading, setUiLoading}}>
            {children}
        </UiLoadingContext.Provider>
    )
}
