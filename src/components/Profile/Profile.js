import {useAppState} from "../../AppContext";

const Profile = () => {

    console.log('Profile.render()')

    const profile = useAppState(state => state.profile);

    return (
        <main>
            <h1>Profile</h1>
            {
                <h4>{ profile.name }</h4>
            }
        </main>
    )
}
export default Profile
