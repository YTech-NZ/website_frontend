// Import the functions you need from the SDKs you need
import firebaseConfig from "./firebaseConfig";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth"; 

// Entry point between website and Firebase
const fireBaseApp = initializeApp(firebaseConfig)

const auth = getAuth(fireBaseApp);
const analytics = getAnalytics(fireBaseApp);

// This observer gets called whenever the user's sign-in state changes (ie. whenever someone logs in or logs out)
// See https://firebase.google.com/docs/auth/web/start#set_an_authentication_state_observer_and_get_user_data
onAuthStateChanged(auth, (user) => {
    if (user){
        alert("User is successfully logged in");

    } else {
        alert("User is successfully logged out");
    }
})

export { auth, analytics }