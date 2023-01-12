import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';

import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRYa1ZJLKygogJDhV9NWLdwb6a51-dho0",
  authDomain: "space-store-7f94f.firebaseapp.com",
  projectId: "space-store-7f94f",
  storageBucket: "space-store-7f94f.appspot.com",
  messagingSenderId: "239266767234",
  appId: "1:239266767234:web:58c983a895ce15ee4daf9b",
  measurementId: "G-LG3GEHPYPM"
};

// Initialize Firebase



const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App db={db}/>
  </React.StrictMode>
);
