import { useEffect, useState, useRef, useRouteMatch, useCallback } from 'react';
import {useParams, Navigate} from 'react-router-dom';
import Message from './Message';
import Form from './Form';
import Chat from './Chat';
import RoutesUser from './RoutesUser';
import Home from './Home';
import ChatList from './ChatList';
import {useSelector, useDispatch, shallowEqual} from "react-redux";
import {
  addMessage
} from "./store/messages/actions";
import { getChatList } from "./store/chats/selectors";


function Chats() {

    const { chatId } = useParams();
    const dispatch = useDispatch();

    // const chats = useSelector(state => state.chats)
    const chats = useSelector(getChatList, shallowEqual);


    function isId(chatItem) {
        return chatItem.id === chatId;
      }
    
      
    const  handleAddMessage = (message) => {
      console.log(chatId)
      dispatch(addMessage(chatId, message));
    }

    const messages = useSelector(state => state.messages.messageList);


    const ROBOT_MESSAGE = 'Ваше сообщение получено!';

    const inputRef = useRef(null);

      // useEffect(() => {

      //   if(messageList.length > 0 && messageList.slice(-1)[0].author !== 'robot'){
      //     setTimeout(()=>{
      //       setMessageList(prevstate => [...prevstate, {text:ROBOT_MESSAGE, author:'robot'}])
      //     }, 1500)
      //   }
      //   inputRef.current?.focus();
      // },[messageList]);


    //   if (!chats[chatId]) {
      if (!chats.chatList.find(isId)){
        return  <Navigate to="/nochat"/>;
      }

      return (
        <div className='chatArea'>
        <div className="chatList">
                <ChatList chats={chats} chatId={chatId}/>
              </div>

              <div className='messageArea'>
                {/* <Form data={messageBody} setData={setMessageBody} setMessage={setMessageList} inputRef={inputRef}></Form> */}

                <Form onAddMessage={handleAddMessage}></Form>

                <div className='messageList'>
                    
                    {
                      messages[chatId] ?
                    messages[chatId].map((item,index)=><Message text={item.text} author={item.author} key={index}/>) : ''
                    }
                </div>
              </div>
              </div>
      )

}

export default Chats;