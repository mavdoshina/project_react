import ChatList from "./ChatList";

function NoChat({ chats}) {
    console.log(chats);
    return (
        <>
        <ChatList chats={chats}/>
        <span>Pleas select a chat</span>
        </>
    )
}

export default NoChat;