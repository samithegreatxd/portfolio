// firebase.js

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

// Your Firebase config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "portfolio-a9523.firebaseapp.com",
  projectId: "portfolio-a9523",
  storageBucket: "portfolio-a9523.firebasestorage.app",
  messagingSenderId: "104931117404",
  appId: "1:104931117404:web:1f4de6484c727f5e5e9999",
  measurementId: "G-YFS8GX8P6Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

// Export Realtime Database
export const db = getDatabase(app);