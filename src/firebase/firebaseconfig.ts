import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAflnaN3E8LiWnb8Q5qT8PNXz2bhuX8LHk",
  authDomain: "scissorshortener.firebaseapp.com",
  projectId: "scissorshortener",
  storageBucket: "scissorshortener.appspot.com",
  messagingSenderId: "838128278810",
  appId: "1:838128278810:web:ff688766142d85e199e0a3",
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth, signInWithRedirect, signInWithEmailAndPassword };
