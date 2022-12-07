// import { configureStore } from "@reduxjs/toolkit";
import {applyMiddleware, createStore, compose, combineReducers} from "redux"
import { profileReducer } from "./profile/reducer"
import { chatsReducer } from "./chats/reducer"
import { messagesReducer } from "./messages/reducer"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    combineReducers({
        chats: chatsReducer,
        profile: profileReducer,
        messages: messagesReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);