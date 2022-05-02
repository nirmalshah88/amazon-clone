import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyB75kR-nYFJHnOFp07ZbdRXsqA6GSoJKbM",
  authDomain: "clone-2be8a.firebaseapp.com",
  projectId: "clone-2be8a",
  storageBucket: "clone-2be8a.appspot.com",
  messagingSenderId: "228712449854",
  appId: "1:228712449854:web:2c2442e2bb3df475668e6f",
  measurementId: "G-TX8703WK88",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { db, auth };
