import {ADD_MESSAGE} from "./actions";
import {AUTHORS} from "../../constants";

const initialState = {
    messageList: {
        id0: [
            {
                text:'Привет',
                author: AUTHORS.ME,
            },
            {
                text:'Ваше сообщение получено!',
                author: AUTHORS.BOT,
            }
        ]
    },
};

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            console.log(state);
            console.log(action);
            const currentList = state.messageList[action.chatId] || [];
            return {
                ...state,
                messageList: {
                    ...state.messageList,
                    [action.chatId]: [
                        ...currentList,
                        {
                            ...action.message,
                            id: `${action.chatId}${currentList.length}`,
                        },
                    ],
                },
            };
            }
            default:
            return state;
        }
};