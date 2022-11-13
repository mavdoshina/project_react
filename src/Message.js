import './App.css';

function Message(props) {
  
  let useClassName = 'message-row';
  if (props.author === "robot") {
    useClassName += ' robot';
  }

  return (
    <div className={useClassName}>
      <div className='message-item'>
        <div className='message-item__autor'>{props.author}</div>
        <div className='message-item__text'>{props.text}</div>
      </div>
    </div>
  );
}

export default Message;
