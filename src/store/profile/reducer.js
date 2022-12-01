const initialState = {
    // showName: false,
    name: 'Default',
    profile: 'Marina'
}
export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        // case 'SWITCH_TOGGLE':
        // return {
        // ...state,
        // showName: !state.showName
        // }
        case 'CHANGE_NAME':
        return {
        ...state,
        name: action.payload
        }
    default:
        return state
    }
}