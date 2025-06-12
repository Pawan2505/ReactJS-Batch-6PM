
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBh2ptL6kZvAMVdIMkXgqEWW3Ly4JqLhTI",
  authDomain: "test-393fe.firebaseapp.com",
  projectId: "test-393fe",
  storageBucket: "test-393fe.firebasestorage.app",
  messagingSenderId: "880964745466",
  appId: "1:880964745466:web:4950d58a0120782d197143"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
