import {useHistory} from 'react-router-dom'
import {useProfile} from "../../context/ProfileContext";

const Login = () => {

    console.log('Login.render()')
    const {setProfile} = useProfile();
    const history = useHistory();

    // Handler for Button CLick
    const onLoginClick = () => {
        setProfile({username: 'birdperson'});
        history.push('/movies');
    }

    return (
        <main>
            <button type="button" onClick={onLoginClick}>Login</button>
        </main>
    )
}
export default Login
