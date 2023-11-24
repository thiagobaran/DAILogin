import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD41FqYWlvl6ZT6Nc_yhq20lghkt-NXZC8",
  authDomain: "dai-login-9da28.firebaseapp.com",
  projectId: "dai-login-9da28",
  storageBucket: "dai-login-9da28.appspot.com",
  messagingSenderId: "77048114860",
  appId: "1:77048114860:web:8442f361f6839a7ba2b909",
  measurementId: "G-924QZS3D6L"
};

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)