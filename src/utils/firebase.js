// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbfjwq7xHXnpeURYKxhfktFV33sJh7T38",
  authDomain: "moviesapp-project.firebaseapp.com",
  projectId: "moviesapp-project",
  storageBucket: "moviesapp-project.appspot.com",
  messagingSenderId: "778348153304",
  appId: "1:778348153304:web:f01b4b666dc2d270e50aad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();