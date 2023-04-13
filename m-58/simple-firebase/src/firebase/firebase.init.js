// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBow7uBAnYT30VFCDrrd-oVLKslkUEdeUo",
  authDomain: "simple-firebase-3ebb1.firebaseapp.com",
  projectId: "simple-firebase-3ebb1",
  storageBucket: "simple-firebase-3ebb1.appspot.com",
  messagingSenderId: "633360300272",
  appId: "1:633360300272:web:f9c943ae52cae3fcdaea35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app