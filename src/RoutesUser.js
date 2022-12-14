import Home from './Home';
import Profile from './Profile';
import Chats from './Chats';
import GistsList from './GistsList';
import { useEffect, useState, useRef } from 'react';
import { Link, Route, Routes} from 'react-router-dom';
import NotFound from './NotFound';
import NoChat from './NoChat';
import SignUp from './SignUp';
import Login from './Login';
import {AUTHORS} from "./constants";
import {useSelector, useDispatch} from "react-redux";
function RoutesUser() {
  const [authed, setAuthed] = useState(false);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setAuthed(true);
      } else {
        setAuthed(false);
      }
    })
  }, []);
    
      // const [chats, setChats] = useState(initialChats);

      // const chats = useSelector(state => state.chats)
      // console.log(chats);
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
            <li>
              <Link to="/gists">Gists</Link>
            </li>
            <li>
              <Link to="/signup">Registration</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
        </ul>
            <Routes>
                <Route exact path="/"></Route>
                <Route exact path="/login" element={<Login />}></Route>
                <Route exact path="/signup" element={<SignUp />}></Route>
                <Route exact path="/profile" element={<Profile />}></Route>
                <Route exact path="/chats" element={<Chats />}></Route>
                <Route path="/chats/:chatId" element={<Chats />}></Route>
                <Route path="/nochat" element={<NoChat />}></Route>
                <Route path="/gists" element={<GistsList />}></Route>
                <Route path="*" element={<NotFound/>}></Route>
            </Routes>
        </div>
    )
}

export default RoutesUser;