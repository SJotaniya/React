// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth}  from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqszTKpymkm7urZ9seqDjQJ_m0sw0e4iE",
  authDomain: "reactfirebase-1-52897.firebaseapp.com",
  projectId: "reactfirebase-1-52897",
  storageBucket: "reactfirebase-1-52897.appspot.com",
  messagingSenderId: "668762713795",
  appId: "1:668762713795:web:6c81af37a850a6c80c7c76"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export {auth}