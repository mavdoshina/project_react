import Home from './Home';
import Profile from './Profile';
import Chats from './Chats';
import { useEffect, useState, useRef } from 'react';
import { Link, Route, Routes} from 'react-router-dom';
import NotFound from './NotFound';
import NoChat from './NoChat';
function RoutesUser() {
    const initialChats = {
        id1: {
          name: "Chat1",
          messages: [
            {
              text:'Привет',
              author: 'Marina',
            },
            {
              text:'Ваше сообщение получено!',
              author: 'robot',
            }
          ],
        },
        id2: {
          name: "Chat2",
          messages: [
            {
              text:'Привет',
              author: 'Elena',
            },
            {
              text:'Ваше сообщение получено!',
              author: 'robot',
            }
          ],
        },
      };
    
      const [chats, setChats] = useState(initialChats);
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
                <Route exact path="/chats" element={<Chats chats={chats}/>}></Route>
                <Route path="/chats/:chatId" element={<Chats chats={chats} setChats={setChats}/>}></Route>
                <Route path='/nochat' element={<NoChat chats={chats}/>}></Route>
                <Route path="*" element={<NotFound/>}></Route>
            </Routes>
        </div>
    )
}

export default RoutesUser;