
import { getAuth } from "firebase/auth";
// firebaseconfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBYqdtLRho0kcUg2mf4rjt0i26SwkQ0Uro",
  authDomain: "hijazistore.firebaseapp.com",
  projectId: "hijazistore",
  storageBucket: "hijazistore.appspot.com",
  messagingSenderId: "100043503993",
  appId: "1:100043503993:web:c359849a649b9586aad7a8",
  measurementId: "G-YZZEYG0RZ1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

const auth = getAuth(app);
export default{ app, db, storage };
