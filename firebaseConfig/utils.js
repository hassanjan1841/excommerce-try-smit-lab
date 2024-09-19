// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAmDE6h5nI7b4VEc4AmbD2R_sV6ljDkBEI",
  authDomain: "ecommerce-7b617.firebaseapp.com",
  projectId: "ecommerce-7b617",
  storageBucket: "ecommerce-7b617.appspot.com",
  messagingSenderId: "336309384847",
  appId: "1:336309384847:web:ec85f3e619a4b3629ba2fa",
  measurementId: "G-99JC17R7QG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword };
