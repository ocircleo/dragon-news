// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCadnweBRwAxTLm4BmREd8xcoxBFkSj0ao",
  authDomain: "dragon-news-b32a7.firebaseapp.com",
  projectId: "dragon-news-b32a7",
  storageBucket: "dragon-news-b32a7.appspot.com",
  messagingSenderId: "926993391864",
  appId: "1:926993391864:web:a27e8b21d50cb8adca1b0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app