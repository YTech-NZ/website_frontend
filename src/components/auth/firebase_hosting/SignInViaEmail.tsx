import {auth} from "./Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function SignInViaEmail(email: string, password:string){
    // this function handles the Firebase's sign in via email method, and error handling.
        
    signInWithEmailAndPassword(auth, email, password)
    // when user signs in successfully
    .then((userCredential) => {
        // const user = userCredential.user;
    })

    // unsuccessful
    .catch((error) => {
        const errorCode = error.code;

        // handling errors. full list of codes here: https://firebase.google.com/docs/auth/admin/errors
        switch (errorCode){
            
            // no user found i.e. wrong email
            case "auth/user-not-found":
                alert("ERROR: No user was found. Check email address and try again.");
                break;

            // wrong password
            case "auth/wrong-password":
                alert("ERROR: The password is incorrect. Please try again.")
                break;

            // default case
            default:
                alert("An error occurred. Please try again.");
        }
    });

}

export default SignInViaEmail