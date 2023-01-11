import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import './firebase/config.js';

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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
