// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADNDEeIJXPXynbeB00QS4s3Ab7GQ5KtPU",
  authDomain: "blogs-c9737.firebaseapp.com",
  projectId: "blogs-c9737",
  storageBucket: "blogs-c9737.appspot.com",
  messagingSenderId: "616360342544",
  appId: "1:616360342544:web:20073aee61ab6ecef60695",
  measurementId: "G-YEYR690TZZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database=getFirestore(app)
// const analytics = getAnalytics(app);