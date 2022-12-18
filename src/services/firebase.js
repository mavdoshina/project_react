import {initializeApp} from "firebase/app";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import { useEffect, useState } from 'react';
import { getFirestore } from 'firebase/firestore';

const config = {
    apiKey: "AIzaSyDWE5JHHxilhcoN635FYjeZHuk3qZ2alRI",
    authDomain: "my-react-project-6ad77.firebaseapp.com",
    databaseURL: "https://my-react-project-6ad77-default-rtdb.firebaseio.com",
    projectId: "my-react-project-6ad77",
    storageBucket: "my-react-project-6ad77.appspot.com",
    messagingSenderId: "440252225500",
    appId: "1:440252225500:web:a7f93110c31593959ba119"
};

const app = initializeApp(config);

export const auth = getAuth(app);
export const db = getFirestore(app);

// custom hook
export function useAuth() {
    //
    const [currentUser, setCurrentUser] = useState();
    useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (user) =>
        setCurrentUser(user)
      );
      return unSubscribe;
    }, []);
    return currentUser;
  }