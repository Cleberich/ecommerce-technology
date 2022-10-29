// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlDN2fOs1QnWvGYiXX1bxPrkQ_qWSrQPA",
  authDomain: "ecommerce-technology.firebaseapp.com",
  projectId: "ecommerce-technology",
  storageBucket: "ecommerce-technology.appspot.com",
  messagingSenderId: "619816439218",
  appId: "1:619816439218:web:19ad88564c25c45b22a8ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const baseDeDatos = getFirestore(app)
export default app