import Home from './Home';
import Profile from './Profile';
import { Link, Route, Routes} from 'react-router-dom';
function RoutesUser() {
    return (
        <div >
        <h2>Меню</h2>
        <ul className='menu'>
            <li>
                <Link to="/">Home</Link>    
            </li>   
            <li> 
                <Link to="/profile">Profile</Link> 
            </li>
        </ul>
            <Routes>
                <Route exact path="/"></Route>
                <Route exact path="/profile" element={<Profile />}></Route>
            </Routes>
        </div>
    )
}

export default RoutesUser;