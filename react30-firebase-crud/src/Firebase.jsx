// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoEyetUiMeWnh7B52bRl84n3LivTl9D5A",
  authDomain: "finalproject-7a3e5.firebaseapp.com",
  projectId: "finalproject-7a3e5",
  storageBucket: "finalproject-7a3e5.firebasestorage.app",
  messagingSenderId: "576231717132",
  appId: "1:576231717132:web:e7e651cb8b61ea7b823129"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);