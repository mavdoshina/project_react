import {useSelector, useDispatch} from "react-redux";
import {AUTHORS} from "./constants";

function Message(props) {
  
  let useClassName = 'message-row';
  if (props.author === AUTHORS.BOT) {
    useClassName += ' robot';
  }

  const profileName = useSelector(state => {
    console.log(state);
    return state.profile.name;
  });
  console.log(profileName);
  console.log(props.author);

  return (
    <div className={useClassName}>
      <div className='message-item'>
        <div className='message-item__autor'>
        {props.author === AUTHORS.ME ? profileName : props.author}:
          {/* {props.author} */}
        </div>
        <div className='message-item__text'>{props.text}</div>
      </div>
    </div>
  );
}

export default Message;
