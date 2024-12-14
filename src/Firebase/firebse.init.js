// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_WoF5iB82tV4q0ZSzgq1-9UPVhmDkaKY",
  authDomain: "coffee-emperor.firebaseapp.com",
  projectId: "coffee-emperor",
  storageBucket: "coffee-emperor.firebasestorage.app",
  messagingSenderId: "43697904549",
  appId: "1:43697904549:web:2e65cc1e9fb110eb9de64c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);