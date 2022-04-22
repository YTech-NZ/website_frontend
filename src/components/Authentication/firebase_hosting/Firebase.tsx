// Import the functions you need from the SDKs you need
import firebaseConfig from "./firebaseConfig";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth"; 
import { useState } from "react";

// Entry point between website and Firebase
const fireBaseApp = initializeApp(firebaseConfig)

const auth = getAuth(fireBaseApp);
const analytics = getAnalytics(fireBaseApp);

// This observer gets called whenever the user's sign-in state changes (ie. whenever someone logs in or logs out)
// See https://firebase.google.com/docs/auth/web/start#set_an_authentication_state_observer_and_get_user_data
onAuthStateChanged(auth, (user) => {
    if (user){
        // user is successfully logged in
        alert(`Successfully logged in!`);
    } else {
        // user is not logged in
        alert(`Not logged in!`);
    }
})

export { auth, analytics }