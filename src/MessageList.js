import Message from './Message';
function MessageList ({messages, chatId}) {
    return(
        <div className='messageList'>
            {
                messages[chatId] ?
            messages[chatId].map((item,index)=><Message text={item.text} author={item.author} key={index}/>) : ''
            }
        </div>
    )
}

export default MessageList;