const initialState = {
    showName: false,
    name: 'Default'
}
export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SWITCH_TOGGLE':
        return {
        ...state,
        showName: !state.showName
        }
    default:
        return state
    }
}