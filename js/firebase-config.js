import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";

import {
    getAuth
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

import {
    getFirestore
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBLE7JcEnx9tzLHVEWDZA6aNkKWUWztqI8",
    authDomain: "final-year-project-f88af.firebaseapp.com",
    projectId: "final-year-project-f88af",
    storageBucket: "final-year-project-f88af.firebasestorage.app",
    messagingSenderId: "273145121224",
    appId: "1:273145121224:web:2c6d0450c4c73e350718fd",
    measurementId: "G-0QE46SYHWL"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);