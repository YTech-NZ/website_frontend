import {auth} from "./Firebase";
import { signOut } from "firebase/auth";

function SignOut() {
    signOut(auth)
    .then(() => {
        // Sign-out successful.
        
    }).catch((error) => {
        // if sign out was unsuccessful
        const errorCode = error.code;
        const errorMessage = error.Message;
    });
}

export default SignOut