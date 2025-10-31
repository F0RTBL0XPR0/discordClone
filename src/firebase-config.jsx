// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // keep Firestore if you use it elsewhere
import { getDatabase } from "firebase/database"; // add Realtime Database

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDb4zYw3WyrkCTwiPGXFJzwjqiMLL-4DR0",
  authDomain: "chatapp-ead1d.firebaseapp.com",
  projectId: "chatapp-ead1d",
  storageBucket: "chatapp-ead1d.firebasestorage.app",
  messagingSenderId: "907280047671",
  appId: "1:907280047671:web:8159cb3d35507ab932a9b2",
  databaseURL:
    "https://chatapp-ead1d-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// Firestore (keep if you need Firestore for messages or other data)
export const firestoreDb = getFirestore(app);

// Realtime Database (for online presence / status tracking)
export const rtdb = getDatabase(app);
