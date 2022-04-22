import {useState} from 'react';

import Section from '../../widgets/Section';
import SignInViaEmail from './firebase_hosting/SignInViaEmail';

function SignIn() {

    // declaring state for email and password
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // updates email state whenever email field changes
    const updateEmail = (event: any) => {
        setEmail(event.target.value)
    }

    // updates password state whenever password field changes
    const updatePassword = (event: any) => {
        setPassword(event.target.value)
    }

    // sends details to firebase sign in method
    const handleSubmit = (event: any) => {
        // prevents email and password to show up on URL
        event.preventDefault();
        
        // calls sign in via email
        SignInViaEmail(email, password);

    }



    return (
        <div>
            {/* unstyled form for sign in */}
            <Section>
                <h1>Sign In</h1> 
                <form id="signIn" onSubmit={(e) => handleSubmit(e)}>
                    <label>Email: 
                        <input 
                        type="email" 
                        name="email"
                        onChange={updateEmail}/>
                    </label>

                    <label>Password: 
                        <input 
                        type="password" 
                        name="password"
                        onChange={updatePassword}/>
                    </label>

                    <input type="submit"/>

                </form>

            </Section>
        </div>
    )

}
export default SignIn;