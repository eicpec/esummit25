// import { initializeApp, getApps } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_AUTH_DOMAIN",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_STORAGE_BUCKET",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID"
// };


// const db = getFirestore(app);

// export { db };


// firebase.js
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // Import Firebase Storage

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyCu9_za8XZZRizcFVS7fvTSMV7dgzDV0K4",
  authDomain: "sample-esummit.firebaseapp.com",
  projectId: "sample-esummit",
  storageBucket: "sample-esummit.appspot.com", // Ensure this matches your Firebase Console
  messagingSenderId: "385925468077",
  appId: "1:385925468077:web:2f06ffdc1a3e40b0f29b24",
  measurementId: "G-RR8J1C87YN"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app); // Initialize and export Firebase Storage