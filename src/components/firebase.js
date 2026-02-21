// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmKPORYgLkD03dYtTT19m-BsNd7PiwixA",
  authDomain: "portfolio-a9523.firebaseapp.com",
  projectId: "portfolio-a9523",
  storageBucket: "portfolio-a9523.firebasestorage.app",
  messagingSenderId: "104931117404",
  appId: "1:104931117404:web:1f4de6484c727f5e5e9999",
  measurementId: "G-YFS8GX8P6Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);