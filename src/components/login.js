import '../utils/styleSheets/login.css';
import Header from "./header";
import { useRef, useState } from 'react';
import { checkValidData } from '../utils/validate';
import {signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';


const Login = () => {

    const email = useRef(null);
    const password = useRef(null);
    const [ErrorMessage, setErrorMessage] = useState(null); 
    const [isSignIn, setIsSignIn] = useState(true);

    const ToogleForm = () => {
        setIsSignIn(!isSignIn);
    }

    const HandleSubmit = () => {
        //validate form
        const currentEmail = email.current.value;
        const currentPassword = password.current.value;

        const message = checkValidData(currentEmail, currentPassword);
        setErrorMessage(message);

        if(message) return;

        //sign in or sign up
        
        if(!isSignIn){
            
            createUserWithEmailAndPassword(auth, currentEmail, currentPassword)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorMessage = error.message;
                setErrorMessage(errorMessage);
            });
        }
        else{

            signInWithEmailAndPassword(auth, currentEmail, currentPassword)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              console.log("signed in");
            })
            .catch((error) => {
              const errorMessage = error.message;
              setErrorMessage(errorMessage);
            });

        }
    }

    return (
        <div>
            <Header/>
            <div className="login-container">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/IN-en-20250127-TRIFECTA-perspective_cf66f5a3-d894-4185-9106-5f45502fc387_small.jpg" alt="background-img"></img>
                <form onSubmit={(e) => e.preventDefault()} className="login-form">
                <div className='login-form-signin'>
                    <h1>{isSignIn ? "Sign In" : "Sign Up"}</h1>
                    {!isSignIn && <input type='text' placeholder='Full Name'></input>}
                    <input ref={email} type="email" placeholder="Email"></input>
                    <input ref={password} type="password" placeholder="Password"></input>
                    <p id="error">{ErrorMessage}</p>
                    <button onClick={HandleSubmit}>{isSignIn ? "Sign In" : "Sign Up"}</button>
                </div>
                {isSignIn ? 
                    <div className="login-form-signup">
                        <span>New to Netflix? <b onClick={ToogleForm}>Sign up now</b></span>
                    </div> : 
                    <div className="login-form-signup"><span>Already a user? <b onClick={ToogleForm}>Sign in now</b></span></div>
                }
            </form>
            </div>
        </div>
    );
}

export default Login;