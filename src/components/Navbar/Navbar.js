import {NavLink} from "react-router-dom";
import {useProfile} from "../../context/ProfileContext";

const Navbar = () => {

    console.log('Navbar.render()')
    const {profile} = useProfile();

    const ulStyle = {
        display: 'flex',
        padding: '1em',
        margin: '0 0 2em',
        listStyleType: 'none'
    };

    const liStyle = {
        marginRight: '1em'
    }

    return (
        <nav>
            <ul style={ulStyle}>
                <li style={liStyle}>
                    <NavLink to="/movies">Movies</NavLink>
                </li>
                <li style={liStyle}>
                    <NavLink to="/profile">Profile</NavLink>
                </li>
                {profile &&
                <li>{profile.username}</li>
                }
            </ul>
        </nav>
    );

}
export default Navbar;
