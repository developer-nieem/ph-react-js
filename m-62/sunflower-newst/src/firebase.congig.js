// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAoSQX2GTR6nHmKm7HMU7dgtcBkoE7M4E",
  authDomain: "news-projext.firebaseapp.com",
  projectId: "news-projext",
  storageBucket: "news-projext.appspot.com",
  messagingSenderId: "825511160794",
  appId: "1:825511160794:web:71c309e1c1c64a202caee3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app