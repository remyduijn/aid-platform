import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDXFrweoSIeqLOB_9eKaVUBr3wy_fPZtgU",
  authDomain: "petplatformchat.firebaseapp.com",
  projectId: "petplatformchat",
  storageBucket: "petplatformchat.appspot.com",
  messagingSenderId: "351656206988",
  appId: "1:351656206988:web:990de0e54dd0060f0191a9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
