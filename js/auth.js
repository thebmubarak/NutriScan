import {
    auth
} from "./firebase-config.js";

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const authSection = document.getElementById("auth-section");
const dashboard = document.getElementById("dashboard-section");
const loading = document.getElementById("loading-screen");

const loginBtn = document.getElementById("login-btn");
const signupBtn = document.getElementById("signup-btn");
const logoutBtn = document.getElementById("logout-btn");

const authMessage = document.getElementById("auth-message");

loginBtn.addEventListener("click", async () => {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try{

        await signInWithEmailAndPassword(auth, email, password);

    }catch(err){

        authMessage.innerText = err.message;

    }

});

signupBtn.addEventListener("click", async () => {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try{

        await createUserWithEmailAndPassword(auth, email, password);

    }catch(err){

        authMessage.innerText = err.message;

    }

});

logoutBtn.addEventListener("click", async () => {

    await signOut(auth);

});

onAuthStateChanged(auth, (user) => {

    loading.style.display = "none";

    if(user){

        authSection.style.display = "none";
        dashboard.style.display = "flex";

    }else{

        authSection.style.display = "flex";
        dashboard.style.display = "none";

    }

});