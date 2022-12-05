import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from './constant/firebase'

/* const firebaseConfig = {
  apiKey: "AIzaSyAJJZv2QGboyYFeUgvsCSHDlaK8ckLifaE",
  authDomain: "pinkurban-65e0a.firebaseapp.com",
  projectId: "pinkurban-65e0a",
  storageBucket: "pinkurban-65e0a.appspot.com",
  messagingSenderId: "602112657319",
  appId: "1:602112657319:web:535b4b38a50e2255581882"
}; */

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

