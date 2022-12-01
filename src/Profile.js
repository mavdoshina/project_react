import {useSelector, useDispatch} from "react-redux";
import {useCallback, useState} from "react";
import {
    toggleShowName, changeName
} from "./store/profile/actions";

function Profile() {

        const { name } = useSelector((state) => state.profile);
        const dispatch = useDispatch();
        const [value, setValue] = useState('');

        // const setShowName = useCallback(() => {
        //     dispatch(toggleShowName);
        // }, [dispatch]);

        const handleChange = useCallback((e) => {
            setValue(e.target.value);
            }, []);

        // const setName = () => {};

        const setName = useCallback(() => {
            dispatch(changeName(value))
            }, [dispatch, value]);

        return (
        <div className="profile-block">
            <h4>Profile</h4>
            <div>
                <input type="text" value={value} onChange={handleChange} />
            </div>
            <div>
                <button onClick={setName}>Change Name</button>
            </div>
        </div>
        );
    }

export default Profile;