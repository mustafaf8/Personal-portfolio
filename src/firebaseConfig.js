// Import Firebase SDK
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Bunu ekle
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyNvKuL5QkqR9Dn8-f96i7lkUBeYNhsMA",
  authDomain: "portfoy2-1ad71.firebaseapp.com",
  projectId: "portfoy2-1ad71",
  storageBucket: "portfoy2-1ad71.firebasestorage.app",
  messagingSenderId: "845364236434",
  appId: "1:845364236434:web:fbc3f80bd64a19010fd64b",
  measurementId: "G-Q82ZG4BBYE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db };
