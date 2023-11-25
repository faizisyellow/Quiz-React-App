// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3yWbUf-062kTqPStBV7kDkBpBjaQKA1k",
  authDomain: "fir-auth-quizz.firebaseapp.com",
  projectId: "fir-auth-quizz",
  storageBucket: "fir-auth-quizz.appspot.com",
  messagingSenderId: "452285314729",
  appId: "1:452285314729:web:97a92f6b89e8941f475bb8",
  measurementId: "G-CEGVV3CBEF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
