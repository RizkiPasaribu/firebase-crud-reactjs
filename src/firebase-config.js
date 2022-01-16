// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkhin0fUC9etzMQD_UNUPuXgpkRy7D9_E",
  authDomain: "crud-firebase-9098b.firebaseapp.com",
  projectId: "crud-firebase-9098b",
  storageBucket: "crud-firebase-9098b.appspot.com",
  messagingSenderId: "86080011887",
  appId: "1:86080011887:web:24a9cf34cfb983ac01d79a",
  measurementId: "G-J62TVETXMR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);
