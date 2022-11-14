import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDLd8ZWEsQoQJtK815h-jB57OlmoVddHm0",
  authDomain: "vj-collab-859cd.firebaseapp.com",
  projectId: "vj-collab-859cd",
  storageBucket: "vj-collab-859cd.appspot.com",
  messagingSenderId: "261526890320",
  appId: "1:261526890320:web:031226850f5012a6672e55",
  measurementId: "G-GVW5H8H320",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();
export const auth = getAuth(app);
