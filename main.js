// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);