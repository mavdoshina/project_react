import { LinearProgress } from "@mui/material";
import { Link } from 'react-router-dom';

function Chat(props) {
    return (
        <>
        <Link to={`/chat/${props.id}`} className="chatItem" id={props.id}>
            {props.name}
        </Link>
        </>
    )
}

export default Chat;
