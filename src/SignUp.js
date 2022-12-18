import { getFormLabelUtilityClasses } from '@mui/material';
import { useEffect, useState, useRef } from 'react';
import { Link, Route, Routes} from 'react-router-dom';

import  { auth } from "./services/firebase";
import  { createUserWithEmailAndPassword } from "firebase/auth";
// import "./services/firebase.js"
function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const handlePassChange = (e) => {
        setPassword(e.target.value);
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
            setError(error.message);
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p>Fill in the form below to register new account.</p>
                <div>
                    <input
                    placeholder="Email"
                    name="email"
                    type="email"
                    onChange={handleEmailChange}
                    value={email}
                    />
                </div>
                <div>
                    <input
                    placeholder="Password"
                    name="password"
                    onChange={handlePassChange}
                    value={password}
                    type="password"
                    />
                </div>
                <div>
                    {error && <p>{error}</p>}
                    <button type="submit">Login</button>
                </div>
                <hr />
                <p>
                    Already have an account? <Link to="/login">Sign in</Link>
                </p>
            </form>
        </div>
    )
};

export default Signup;