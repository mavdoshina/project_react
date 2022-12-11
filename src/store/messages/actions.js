import {AUTHORS} from "../../constants";
export const ADD_MESSAGE = "CHATS::ADD_MESSAGE";

export const addMessage = (chatId, message) => ({
    type: ADD_MESSAGE,
    chatId,
    message
});

export const addMessageWithThunk = (chatId, message) => (dispatch, getState) => {
    dispatch(addMessage(chatId, message));
    if (message.author !== AUTHORS.BOT) {
        const botMessage = {
            text: 'Ваше сообщение получено!',
            author: AUTHORS.BOT,
        };
        setTimeout(() => dispatch(addMessage(chatId, botMessage)), 2000);
    }
 }