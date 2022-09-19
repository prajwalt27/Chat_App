// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyBJ1Q0_tAsmfGozO01XyvTokPjZEm3n-ck",
  authDomain: "chatapp-f59ac.firebaseapp.com",
  projectId: "chatapp-f59ac",
  storageBucket: "chatapp-f59ac.appspot.com",
  messagingSenderId: "722848659428",
  appId: "1:722848659428:web:e0c4a078507b2ad6bff9f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
