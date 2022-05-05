import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAM2qQQSV6vSQPx6XeItSI4fnN_L6hq2AE",
  authDomain: "movies-b8ea6.firebaseapp.com",
  projectId: "movies-b8ea6",
  storageBucket: "movies-b8ea6.appspot.com",
  messagingSenderId: "141883383781",
  appId: "1:141883383781:web:b72535cc3af9e60046990c",
  measurementId: "G-5H84MZ88L1",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
