import { useEffect, useState, useRef, useRouteMatch } from 'react';
import {useParams, Navigate} from 'react-router-dom';
import Message from './Message';
import Form from './Form';
import Chat from './Chat';
import RoutesUser from './RoutesUser';
import Home from './Home';
import ChatList from './ChatList';
import {useSelector, useDispatch} from "react-redux";
console.log('222');
function Chats({chats}) {

    // const chats = useSelector(state => state.chats)
    console.log('ddd');

    const { chatId } = useParams();
  console.log(chats);
  console.log(chatId);

    function isId(chatItem) {
        return chatItem.id === chatId;
      }
      
      console.log(chats.chatList.find(isId));

      const messages = useSelector(state => state.messages.messageList);
console.log(messages);
  

  // const { path, url } = useRouteMatch();


    // const [messageList, setMessageList] = useState([
    //     {
    //       text:'Привет',
    //       author: 'Marina',
    //     },
    //     {
    //       text:'Ваше сообщение получено!',
    //       author: 'robot',
    //     }
    //   ])


      // const [messageBody, setMessageBody] = useState({
      //   text:'',
      //   author: '',
      // });

      // const [chatList, setChatList] = useState([
      //   {
      //     id: '1',
      //     name: 'Чат №1'
      //   },
      //   {
      //     id: '2',
      //     name: 'Чат №2'
      //   }
      // ]);

      // const [chatBody, setChatBody] = useState({
      //   id: '',
      //   name: ''
      // });

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

                <div className='messageList'>
                    {
                    messages[chatId].map((item,index)=><Message text={item.text} author={item.author} key={index}/>)
                    }
                </div>
              </div>
              </div>
      )

}

export default Chats;