const SWITCH_TOGGLE = 'SWITCH_TOGGLE';
const CHANGE_NAME = "PROFILE::CHANGE_NAME";
export const toggleShowName = {
    type: SWITCH_TOGGLE
};

export const changeName = (newName) => ({
    type: CHANGE_NAME,
    payload: newName,
});