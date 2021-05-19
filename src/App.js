import './App.css';
import Movies from "./components/Movies/Movies";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import {useAppState, useDispatch} from "./AppContext";
import {fetchMovies} from "./components/Movies/MoviesAPI";
import {useEffect} from "react";
import PrivateRoute from "./hoc/PrivateRoute";

function App() {

    console.log('App.render()');
    const dispatch = useDispatch();
    const profile = useAppState(state => state.profile);

    useEffect(() => {
        if (profile !== null) {
            fetchMovies(dispatch);
        }
    }, [profile]);

    return (
        <BrowserRouter>
            <div className="App">
                <Navbar/>
                <Switch>
                    <Route path="/" exact component={Login}/>
                    <PrivateRoute path="/movies" component={Movies}/>
                    <PrivateRoute path="/profile" component={Profile}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
