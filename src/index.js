import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBC9949sPKTyCftvjGOiS8DvGvpsbhbj1A",
  authDomain: "frigidaires-f2d1c.firebaseapp.com",
  projectId: "frigidaires-f2d1c",
  storageBucket: "frigidaires-f2d1c.appspot.com",
  messagingSenderId: "400603621827",
  appId: "1:400603621827:web:3bcce54887a221690bf576"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <App /> );


