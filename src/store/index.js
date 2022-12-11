// import { configureStore } from "@reduxjs/toolkit";
import {applyMiddleware, createStore, compose, combineReducers} from "redux"
import { profileReducer } from "./profile/reducer"
import { chatsReducer } from "./chats/reducer"
import { messagesReducer } from "./messages/reducer"
import thunk from 'redux-thunk';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// создаем объект конфигурации для persist
const persistConfig = {
    key: 'root',
    storage,
}

// комбинируем редьюсеры
const rootReducer = combineReducers({
    chats: chatsReducer,
    profile: profileReducer,
    messages: messagesReducer,
});

// оборачиваем редьюсеры в persist
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
);

// создаем persistor
export const persistor = persistStore(store);