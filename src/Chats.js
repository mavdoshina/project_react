import { useEffect, useState, useRef, useRouteMatch, useCallback } from 'react';
import {useParams, Navigate} from 'react-router-dom';
import Form from './Form';
import Chat from './Chat';
import RoutesUser from './RoutesUser';
import Home from './Home';
import ChatList from './ChatList';
import {useSelector, useDispatch, shallowEqual} from "react-redux";
import {
  addMessageWithThunk
} from "./store/messages/actions";
import { getChatList } from "./store/chats/selectors";
import {AUTHORS} from "./constants";
import MessageList from './MessageList';


function Chats() {

    const { chatId } = useParams();
    const dispatch = useDispatch();

    const chats = useSelector(getChatList, shallowEqual);

    function isId(chatItem) {
        return chatItem.id === chatId;
    }
 
    const  handleAddMessage = (message) => {
      dispatch(addMessageWithThunk(chatId, message));
    }

    const messages = useSelector(state => state.messages.messageList);

    const inputRef = useRef(null);

      if (!chats.chatList.find(isId)){
        return  <Navigate to="/nochat"/>;
      }

      return (
        <div className='chatArea'>
          <div className="chatList">
            <ChatList chats={chats} chatId={chatId}/>
          </div>

          <div className='messageArea'>
            <Form onAddMessage={handleAddMessage}></Form>
            <MessageList messages={messages} chatId={chatId}></MessageList>
          </div>
        </div>
      )

}

export default Chats;