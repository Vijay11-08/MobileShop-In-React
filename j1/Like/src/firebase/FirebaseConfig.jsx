// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfGtxsbcTFKVBxjQqp6wNWEURlpl1aa8g",
  authDomain: "likezone-263fa.firebaseapp.com",
  projectId: "likezone-263fa",
  storageBucket: "likezone-263fa.firebasestorage.app",
  messagingSenderId: "281804687208",
  appId: "1:281804687208:web:cab12c9e992a6a9789b8dd",
  measurementId: "G-RSJCB48B9H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const ANALYTICS = getAnalytics(app);
// Initialize Firebase


const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }