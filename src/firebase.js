import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyBIX9M_nuW1vleE6-2qPZyzDRPjwanmVlw",
  authDomain: "clone-86285.firebaseapp.com",
  projectId: "clone-86285",
  storageBucket: "clone-86285.appspot.com",
  messagingSenderId: "278764950102",
  appId: "1:278764950102:web:0ad8af14043f2e3605e1f7",
  measurementId: "G-BXT1G5QREE",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { db, auth };
