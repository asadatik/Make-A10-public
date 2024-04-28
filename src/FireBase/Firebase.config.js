// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyxpmn6WHM_TMuAObUh2mIdBFC3DqH72E",
  authDomain: "adventures-abound.firebaseapp.com",
  projectId: "adventures-abound",
  storageBucket: "adventures-abound.appspot.com",
  messagingSenderId: "912272333757",
  appId: "1:912272333757:web:ab5163bc6d36e94c3390d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  
const auth = getAuth(app);
export default auth;

