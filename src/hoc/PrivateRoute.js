import {Route, Redirect} from "react-router-dom";
import {useAppState} from "../AppContext";

const PrivateRoute = props => {
    const profile = useAppState(state => state.profile);
    if (profile === null) {
        return <Redirect to="/"/>;
    } else {
        return <Route {...props} />;
    }
}
export default PrivateRoute;
