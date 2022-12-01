import {useSelector, useDispatch} from "react-redux";
function Message(props) {
  
  let useClassName = 'message-row';
  if (props.author === "robot") {
    useClassName += ' robot';
  }

  const profileName = useSelector(state => state.profile);
  console.log(profileName);

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
