import Home from './Home';
import { Link, BrowserRouter, Route } from 'react-router-dom';
function Routes() {
    return (
        <BrowserRouter>
        <Link to="/">Home</Link>        
        <Link to="/profile">Profile</Link> 
            <Routes>
                <Route exact path="/">
                    <Home />
                </Route>
                {/* <Route path="/profile">
                    <Profile />
                </Route>
                <Route
                    exact
                    path="/chats"
                    >
                    <Chats />
                </Route> */}
            </Routes>
        </BrowserRouter>
    )
}

export default Routes;