import {useProfile} from "../../context/ProfileContext";

const Profile = () => {

    console.log('Profile.render()')

    const {profile} = useProfile();

    return (
        <main>
            <h1>Profile</h1>
            {profile &&
            <p>Welcome, {profile.username}</p>
            }
        </main>
    )
}
export default Profile;
