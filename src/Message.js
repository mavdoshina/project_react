import {useSelector, useDispatch} from "react-redux";
import {AUTHORS} from "./constants";

function Message(props) {
  
  let useClassName = 'message-row';
  if (props.author === AUTHORS.BOT) {
    useClassName += ' robot';
  }

  const profileName = useSelector(state => {
    return state.profile.name;
  });

  return (
    <div className={useClassName}>
      <div className='message-item'>
        <div className='message-item__autor'>
        {props.author === AUTHORS.ME ? profileName : props.author}:
        </div>
        <div className='message-item__text'>{props.text}</div>
      </div>
    </div>
  );
}

export default Message;
