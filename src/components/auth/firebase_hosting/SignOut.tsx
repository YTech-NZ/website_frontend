import {auth} from "./Firebase";
import { signOut } from "firebase/auth";

function SignOut() {
    // this function signs users out 

    signOut(auth)
    .then(() => {
        // Sign-out successful.
        
    }).catch((error) => {
        alert("Sign out was unsuccessful");
    });
}

export default SignOut