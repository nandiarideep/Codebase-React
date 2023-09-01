import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD4CcIiy7FzjE32MK5-_Vbf-oPx70u9XrU",
  authDomain: "codebase-5e2f2.firebaseapp.com",
  projectId: "codebase-5e2f2",
  storageBucket: "codebase-5e2f2.appspot.com",
  messagingSenderId: "642236621404",
  appId: "1:642236621404:web:6190fbeace3fc325d3fc99",
  measurementId: "G-GB4R5JT1WE"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };