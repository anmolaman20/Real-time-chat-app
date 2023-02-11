import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: "chat-e5130.firebaseapp.com",
  projectId: "chat-e5130",
  storageBucket: "chat-e5130.appspot.com",
  messagingSenderId: "414962459565",
  appId: "1:414962459565:web:ff67ebf57e851038b67724",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
