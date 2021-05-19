import {NavLink} from "react-router-dom";
import {useAppState} from "../../AppContext";


const Navbar = () => {

    console.log('Navbar.render()')

    const profile = useAppState(state => state.profile);

    const ulStyle = {
        display: 'flex',
        padding: 0,
        margin: '0 0 2em',
        listStyleType: 'none'
    };

    return (
        <nav>
            <ul style={ ulStyle }>
                <li>
                    <NavLink to="/movies">Movies</NavLink>
                </li>
                <li>
                    <NavLink to="/profile">Profile</NavLink>
                </li>
                { profile &&
                    <li>Welcome {profile.name}</li>
                }
            </ul>
        </nav>
    )
}
export default Navbar;
