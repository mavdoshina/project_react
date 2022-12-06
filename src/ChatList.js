import {Link} from 'react-router-dom';
import { useEffect, useState, useRef, useRouteMatch, useCallback } from 'react';
import {useSelector, useDispatch} from "react-redux";
import TextField from '@mui/material/TextField';
import {useParams, Navigate} from 'react-router-dom';
import {
    addChat, addChatThunk
  } from "./store/chats/actions";


const ChatListFunctionComponent = props => {
    const [newChatName, setNewChatName] = useState('')

    const chats = useSelector(state => state.chats)
    const dispatch = useDispatch()

    const handleChangeChatName = useCallback(event => {
        setNewChatName(event.target.value)
    }, [])

    const handleAddChat = useCallback(() => {
        console.log(newChatName);
        dispatch(addChat(newChatName))
    }, [dispatch, newChatName])

    // const { chatId } = useParams();
    // if (!chats[chatId]) {
    //     return  <Navigate to="/nochat"/>;
    //   }

    console.log(chats);
    console.log('111');

    return <div className="child__bordered">
        <p>ChatList Function Component</p>

        <TextField
            id="text-field"
            className="child__text-field"
            
            placeholder="Введите название чата"
            variant="outlined"
            value={newChatName}
            onChange={handleChangeChatName}
        />
        <button className="app__button" onClick={handleAddChat}>Добавить чат</button>

        {chats.chatList.map(chatItem => (
            <div key={chatItem.id}>
                <Link to={`/chats/${chatItem.id}`}>
                    <span>{chatItem.name}</span>
                </Link>
            </div>
        ))}
    </div>
}


function ChatList({ chats, chatId }) {
    return (
        <div>
            <ChatListFunctionComponent />
            {/* {Object.keys(chats).map((id, i) => (
                <div key={i}>
                    <Link to={`/chats/${id}`}>
                        <b style={{ color: id === chatId ? "#000000" : "grey" }}>
                            {chats[id].name}
                        </b>
                    </Link>
                </div>
            ))} */}
        </div>
    );
}

export default ChatList;