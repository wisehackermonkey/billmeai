import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth"
// import { getFirestore, collection , getDocs, getDoc} from "firebase/firestore"
// src/index.js
import './main.scss';

// Rest of your JavaScript code

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDEMxyFycpcztpIkXOYRZJ6la8uOvSUqys",
    authDomain: "billmeai.firebaseapp.com",
    projectId: "billmeai",
    storageBucket: "billmeai.appspot.com",
    messagingSenderId: "989315205597",
    appId: "1:989315205597:web:060644108c378fdf178e34",
    measurementId: "G-ELVC28Y0VN"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp)
// const db = getFirestore(firebaseApp)
// const todosCol = collection(db, "todos")
// const snapshot = await getDocs(todosCol)

onAuthStateChanged(auth, user => {
    if (user !== null) {
        console.log("logged in !")
    } else {
        console.log("no User!")
    }
})
// Example code to get you started
document.addEventListener('DOMContentLoaded', () => {
    const message = 'Hello, billmeai!';
    console.log(message);
  });
  