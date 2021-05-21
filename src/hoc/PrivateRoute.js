import {Route, Redirect} from "react-router-dom";
import {useProfile} from "../context/ProfileContext";


const PrivateRoute = props => {

    const {profile} = useProfile()

    if (profile === null) {
        return <Redirect to="/"/>;
    } else {
        return <Route {...props} />;
    }
}
export default PrivateRoute;
