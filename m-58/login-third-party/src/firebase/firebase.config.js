// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaZFI-ko7rwytpP3ImfSVUjgN8q4Gp3K4",
  authDomain: "login-with-thirdparty.firebaseapp.com",
  projectId: "login-with-thirdparty",
  storageBucket: "login-with-thirdparty.appspot.com",
  messagingSenderId: "345013296303",
  appId: "1:345013296303:web:423747c63c419f8ee7885a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app