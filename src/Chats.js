import { useEffect, useState, useRef } from 'react';
import {useParams, Redirect} from 'react-router-dom';
import Message from './Message';
import Form from './Form';
import Chat from './Chat';
import RoutesUser from './RoutesUser';
import Home from './Home';
import ChatList from './ChatList';

function Chats() {

  const { chatId } = useParams();


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


    const [messageList, setMessageList] = useState([
        {
          text:'Привет',
          author: 'Marina',
        },
        {
          text:'Ваше сообщение получено!',
          author: 'robot',
        }
      ])
      const [messageBody, setMessageBody] = useState({
        text:'',
        author: '',
      });

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

      const [chatBody, setChatBody] = useState({
        id: '',
        name: ''
      });
    
      const ROBOT_MESSAGE = 'Ваше сообщение получено!';

      const inputRef = useRef(null);

      useEffect(() => {
       
        if(messageList.length > 0 && messageList.slice(-1)[0].author !== 'robot'){
          setTimeout(()=>{
            setMessageList(prevstate => [...prevstate, {text:ROBOT_MESSAGE, author:'robot'}])
          }, 1500)
        }
        inputRef.current?.focus();
      },[messageList]);


      if (!chats[chatId]) {
        return  <Redirect to="/nochat" />;
      }

      return (
        <div className='chatArea'>
        <div className="chatList">
                {/* {
                  chatList.map((item,index)=><Chat id={item.id} name={item.name} key={index}/>)
                } */}
                <ChatList chats={chats} chatId={chatId}/>
              </div>

              <div className='messageArea'>
                <Form data={messageBody} setData={setMessageBody} setMessage={setMessageList} inputRef={inputRef}></Form>

                <div className='messageList'>
                    {
                    chats[chatId].messages.map((item,index)=><Message text={item.text} author={item.author} key={index}/>)
                    }
                </div>
              </div>
              </div>
      )

}

export default Chats;