import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDVjfpyf7KleqmLF4UKRQDn-VN0V013ZYo",
    authDomain: "spotify-clone-development.firebaseapp.com",
    projectId: "spotify-clone-development",
    storageBucket: "spotify-clone-development.appspot.com",
    messagingSenderId: "317876986408",
    appId: "1:317876986408:web:5424f43fe64c3dfb8e4b1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)
