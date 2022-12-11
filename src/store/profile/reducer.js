import {CHANGE_NAME} from "./actions";

const initialState = {
    age: 27,
    name: 'Marina'
}
export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        // case 'SWITCH_TOGGLE':
        // return {
        // ...state,
        // showName: !state.showName
        // }
        case CHANGE_NAME:
        return {
        ...state,
        name: action.payload
        }
    default:
        return state
    }
}