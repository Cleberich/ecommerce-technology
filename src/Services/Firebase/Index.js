import { initializeApp } from "firebase/app";
import { getDocs, collection, query, where } from 'firebase/firestore'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBlDN2fOs1QnWvGYiXX1bxPrkQ_qWSrQPA",
  authDomain: "ecommerce-technology.firebaseapp.com",
  projectId: "ecommerce-technology",
  storageBucket: "ecommerce-technology.appspot.com",
  messagingSenderId: "619816439218",
  appId: "1:619816439218:web:19ad88564c25c45b22a8ab"
};


const app = initializeApp(firebaseConfig);

export const baseDeDatos = getFirestore(app)