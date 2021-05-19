import {useDispatch} from "../../AppContext";

const Login = () => {

    // Get dispatch from AppContext
    const dispatch = useDispatch();

    const onLoginClick = () => {
        dispatch({
            profile: {
                name: 'Bird Person',
            }
        });
    }

    return (
        <main>
            <button onClick={ onLoginClick }>Login</button>
        </main>
    )
}
export default Login
