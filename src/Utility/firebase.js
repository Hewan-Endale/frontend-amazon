// we're importing the core Firebase library, as well as the
// functions for authentication and the Firestore database
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBQVH-w28_E8vGOpTA7CzT6hMLDB_Pw24k",
  authDomain: "clone-1c9ee.firebaseapp.com",
  projectId: "clone-1c9ee",
  storageBucket: "clone-1c9ee.firebasestorage.app",
  messagingSenderId: "534354125578",
  appId: "1:534354125578:web:84a1187b44e3891782d0f3"
};

// Initialize the Firebase app. This creates a new instance of the Firebase app, which is the entry point for all  Firebase functionality
const app = firebase.initializeApp(firebaseConfig);

// Get the authentication service for signing in and out of your app
export const auth = getAuth(app);

// Get the Firestore database for storing and retrieving data
export const db = app.firestore();

