import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC0nPHizFi_9SIFQtPIjMb8GIkkHMcrkJ4",
  authDomain: "solo-project-a5f94.firebaseapp.com",
  projectId: "solo-project-a5f94",
  storageBucket: "solo-project-a5f94.appspot.com",
  messagingSenderId: "190120022278",
  appId: "1:190120022278:web:a6fcd2d7f0121ce8a1ce87",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
