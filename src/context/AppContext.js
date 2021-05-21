import {ProfileProvider} from "./ProfileContext";
import {MoviesProvider} from "./MoviesContext";
import {UiLoadingProvider} from "./UiLoadingContext";

export const AppProvider = ({children}) => {
    return (
        <ProfileProvider>
            <MoviesProvider>
                <UiLoadingProvider>
                    {children}
                </UiLoadingProvider>
            </MoviesProvider>
        </ProfileProvider>
    )
}
