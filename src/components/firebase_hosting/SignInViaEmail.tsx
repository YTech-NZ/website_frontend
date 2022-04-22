import {auth} from "./Firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function SignInViaEmail(email: string, password:string){
        
    signInWithEmailAndPassword(auth, email, password)
    // when user signs in successfully
    .then((userCredential) => {
        const user = userCredential.user;
    })

    // when user is not successful
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.Message;
    });

    

}

export default SignInViaEmail