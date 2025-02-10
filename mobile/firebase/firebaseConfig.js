// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, setDoc, updateDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // Credentials
  apiKey: "AIzaSyA8GMq9Z0oUpoTq5RBtEd8KCTOgOpYVh-c",
  authDomain: "cogny-test-israel.firebaseapp.com",
  projectId: "cogny-test-israel",
  storageBucket: "cogny-test-israel.firebasestorage.app",
  messagingSenderId: "399279754040",
  appId: "1:399279754040:web:eba8e9743f8866a4228fcd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, getDocs, doc, setDoc, updateDoc };