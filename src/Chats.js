import { useEffect, useState, useRef, useRouteMatch } from 'react';
import {useParams, Navigate} from 'react-router-dom';
import Message from './Message';
import Form from './Form';
import Chat from './Chat';
import RoutesUser from './RoutesUser';
import Home from './Home';
import ChatList from './ChatList';
import {useSelector, useDispatch} from "react-redux";
import {
  addMessage
} from "./store/messages/actions";

function Chats() {

  const { chatId } = useParams();

  const chats = useSelector((state) => state.chats.chatList);
  const messages = useSelector(state => state.messages.messageList);

  const dispatch = useDispatch();
    const onAddMessage = (message) => {
    dispatch(addMessage(chatId, message));
  }
  
      const ROBOT_MESSAGE = 'Ваше сообщение получено!';

      const inputRef = useRef(null);

    

      if (!chats[chatId]) {
        return  <Navigate to="/nochat"/>;
      }

      return (
        <div className='chatArea'>
        <div className="chatList">
                <ChatList chats={chats} chatId={chatId}/>
              </div>

              <div className='messageArea'>
                {/* <Form data={messageBody} setData={setMessageBody} setMessage={setMessageList} inputRef={inputRef}></Form> */}

                <div className='messageList'>
                    {
                    // chats[chatId].messages.map((item,index)=><Message text={item.text} author={item.author} key={index}/>)

                    messages.map((item,index)=><Message text={item.text} author={item.author} key={index}/>)
                    }
                </div>
              </div>
              </div>
      )

}

export default Chats;