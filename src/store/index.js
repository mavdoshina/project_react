// import { configureStore } from "@reduxjs/toolkit";
import {applyMiddleware, createStore, compose, combineReducers} from "redux"
import { profileReducer } from "./profile/reducer"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(profileReducer, window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);