// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSmwp9x1B2ci13zyY-Yoxz-nrDd7QgXSk",
  authDomain: "info-5164-websiteassignment.firebaseapp.com",
  projectId: "info-5164-websiteassignment",
  storageBucket: "info-5164-websiteassignment.firebasestorage.app",
  messagingSenderId: "38550304058",
  appId: "1:38550304058:web:a082ec3079c0bdaaf00c03",
  measurementId: "G-Y631DVXJJC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);