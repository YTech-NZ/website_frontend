import { onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react'
import AdminDashboard from '../components/auth/AdminDashboard';
import { auth } from '../components/auth/firebase_hosting/Firebase';
import SignIn from '../components/auth/SignIn';

function Admin() {
    // this function takes care of sign in status. sign in status (isSignedIn) determines what is shown on /admin page.

    // tracking sign in status
    const [isSignedIn, setSignInStatus] = useState(false);

    // This observer gets called whenever the user's sign-in state changes (ie. whenever someone logs in or logs out)
    // See https://firebase.google.com/docs/auth/web/start#set_an_authentication_state_observer_and_get_user_data
    onAuthStateChanged(auth, (user:any) => {
        if (user){
            setSignInStatus(true);
        } else {
            setSignInStatus(false);
        }
    })


    // prompts sign in if not logged in.
    return (
        <>
            isSignedIn ? <AdminDashboard /> : <SignIn />
        </>
    )
}

export default Admin