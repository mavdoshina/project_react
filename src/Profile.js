import {useSelector, useDispatch} from "react-redux";
import {useCallback, useState} from "react";
import {
   changeName
} from "./store/profile/actions";

function Profile() {

        const name = useSelector((state) => state.profile);
        const dispatch = useDispatch();
        const [value, setValue] = useState('');

        const handleChange = useCallback((e) => {
            setValue(e.target.value);
            }, []);

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