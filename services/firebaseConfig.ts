// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB054Fczui8FhRQQVq0P-ne2vQTdUGzF-g",
  authDomain: "global-solution-mobile-e74a4.firebaseapp.com",
  projectId: "global-solution-mobile-e74a4",
  storageBucket: "global-solution-mobile-e74a4.firebasestorage.app",
  messagingSenderId: "380784390614",
  appId: "1:380784390614:web:8e951f1b18a353880cb477"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);