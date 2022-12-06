import { useEffect, useState, useRef, useRouteMatch, useCallback, usePrevious } from 'react';
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
import {selectMessagesByChatId} from "./selectors/messages";
import {AUTHORS} from "./constants";

function Chats() {

  const { chatId } = useParams();
  const handleAddMessage = useCallback((newMessage) => {
    dispatch(addMessage({ message: newMessage, chatId }))
}, [])

  const chats = useSelector((state) => state.chats.chatList);
  const messages = useSelector(state => state.messages.messageList);

  const dispatch = useDispatch();
    const onAddMessage = (message) => {
    dispatch(addMessage(chatId, message));
  }
  
      const ROBOT_MESSAGE = 'Ваше сообщение получено!';

      const inputRef = useRef(null);



  // const { chatId } = useParams()
  // console.log(chatId);
  // console.log('hhhh');
  // const timer = useRef(null)

  // const messages = useSelector(state => selectMessagesByChatId(state, { chatId }))
  // const dispatch = useDispatch()

  // const prevMessages = usePrevious(messages)

  // const handleAddMessage = useCallback((newMessage) => {
  //     dispatch(addMessage({ message: newMessage, chatId }))
  // }, [])

  // useEffect(() => {
  //     if (
  //         prevMessages &&
  //         prevMessages.length < messages.length &&
  //         messages[messages.length - 1].sender === AUTHORS.ME
  //     ) {
  //         timer.current = setTimeout(() => {
  //             dispatch(
  //                 addMessage({
  //                     message: {
  //                         text: "I am robot",
  //                         sender: AUTHORS.BOT
  //                     },
  //                     chatId
  //                 })
  //             )
  //         }, 1000)
  //     }
  // }, [messages, prevMessages, handleAddMessage])

  // useEffect(() => {
  //     return () => {
  //         console.log('willUnmount')
  //         clearTimeout(timer.current)
  //     }
  // }, [])
    

      if (!chats[chatId]) {
        return  <Navigate to="/nochat"/>;
      }

      return (
        <div className='chatArea'>
        <div className="chatList">
                <ChatList chats={chats} chatId={chatId}/>
              </div>

              <div className='messageArea'>
                <Form onAddMessage={handleAddMessage} ></Form>

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