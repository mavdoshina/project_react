import {ADD_CHAT} from "./actions";

const initialState = {
    chatList: [
        {
            id1: '1',
            name: '11111'
        }
    ],
};

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT:
        return {
            ...state,
            chatList: [
                ...state.chatList,
                {
                    id: `id${state.chatList.length}`,
                    name: action.name,
                },
            ],
        };
        default:
        return state;
    }
};