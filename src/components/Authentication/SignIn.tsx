import {useState} from 'react';

import Section from '../../widgets/Section';
import '../../styles/signin.scss';
import SignInViaEmail from './firebase_hosting/SignInViaEmail';
import { TextField } from '@material-ui/core';

function SignIn() {
    // this function takes care of the sign-in page which includes the form 

    // declaring state for email and password
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const updateEmail = (event: any) => {
        setEmail(event.target.value)
    }

    const updatePassword = (event: any) => {
        setPassword(event.target.value)
    }

    const handleSubmit = (event: any) => {
        // prevents email and password to show up on URL
        event.preventDefault();
        
        // sends details to firebase sign in method
        SignInViaEmail(email, password);
    }


    return (
        <Section>
            
            <form id="signIn" onSubmit={(e) => handleSubmit(e)}>
                <h1>Sign In</h1>

                <TextField
                    className='text-field'
                    variant='outlined'
                    type="email"
                    label="Email"
                    onChange={updateEmail}
                />
                
                <br />

                <TextField
                    className='text-field'
                    variant='outlined'
                    type="password"
                    label="Password"
                    onChange={updatePassword}
                />

                <br />
                
                <input type="submit" className='button'/>

            </form>

        </Section>
    )

}
export default SignIn;