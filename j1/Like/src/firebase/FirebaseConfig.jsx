// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
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

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }
