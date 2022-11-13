function Chat(props) {
    return (
        <div className="chatItem" id={props.id}>
            {props.name}
        </div>
    )
}

export default Chat;
