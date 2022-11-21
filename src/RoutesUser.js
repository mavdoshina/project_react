import Home from './Home';
import Profile from './Profile';
import Chats from './Chats';
import { useEffect, useState, useRef } from 'react';
import { Link, Route, Routes} from 'react-router-dom';
import NotFound from './NotFound';
function RoutesUser() {
    // const [chats, setChats] = useState(initialChats);
    return (
        <div className='menu-area'>
        
        <ul className='menu'>
            <li>
                <Link to="/">Home</Link>    
            </li>   
            <li> 
                <Link to="/profile">Profile</Link> 
            </li>
            <li> 
                <Link to="/chats">Chats</Link> 
            </li>
        </ul>
            <Routes>
                <Route exact path="/"></Route>
                <Route exact path="/profile" element={<Profile />}></Route>
                <Route exact path="/chats" element={<Chats />}></Route>
                <Route path="/chats/:chatId">
<Chats chats={chats} setChats={setChats} />
</Route>
                <Route path="*" element={<NotFound/>}></Route>
            </Routes>
        </div>
    )
}

export default RoutesUser;