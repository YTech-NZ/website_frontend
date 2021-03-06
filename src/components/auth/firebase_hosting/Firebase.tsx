// Import the functions you need from the SDKs you need
import firebaseConfig from "./firebaseConfig";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; 

// Entry point between website and Firebase
const fireBaseApp = initializeApp(firebaseConfig)

const auth = getAuth(fireBaseApp);
const analytics = getAnalytics(fireBaseApp);

export { auth, analytics }