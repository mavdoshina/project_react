import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth"

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