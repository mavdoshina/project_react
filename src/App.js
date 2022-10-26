import { useEffect, useState, useRef } from 'react';
import './App.css';
import Message from './Message';
import Form from './Form';
function App() {
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
    
      const ROBOT_MESSAGE = 'Ваше сообщение получено!';

      const inputRef = useRef(null);
    
      useEffect(() => {
       
        if(messageList.length > 0 && messageList.slice(-1)[0].author !== 'robot'){
          setTimeout(()=>{
            setMessageList(prevstate => [...prevstate, {text:ROBOT_MESSAGE, author:'robot'}])
          }, 1500)
        }
        inputRef.current?.focus();
      },[messageList])

      return (
        <div className="App">
            <div className='App-body'>
                <Form data={messageBody} setData={setMessageBody} setMessage={setMessageList} inputRef={inputRef}></Form>
            <div className='messageList'>
                {
                messageList.map((item,index)=><Message text={item.text} author={item.author} key={index}/>)
                }
            </div>
          </div>
        </div>
      );
}

export default App;