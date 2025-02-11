// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdCQmmRxVXy4kcTWHyjNUM6BsFMmly55Y",
  authDomain: "netflix-gpt-17a14.firebaseapp.com",
  projectId: "netflix-gpt-17a14",
  storageBucket: "netflix-gpt-17a14.firebasestorage.app",
  messagingSenderId: "767291325040",
  appId: "1:767291325040:web:8370bccf0d039cea2f52b5",
  measurementId: "G-CVW07FLKW7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();