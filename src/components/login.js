import '../utils/styleSheets/login.css';
import Header from "./header";
import { useRef, useState } from 'react';
import { checkValidData } from '../utils/validate';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { addUser } from "../utils/slices/userSlice";
import { useDispatch } from "react-redux";
import { BACKGROUND } from '../utils/constants';

const Login = () => {

    const email = useRef(null);
    const password = useRef(null);
    const fullName = useRef(null);
    const dispatch = useDispatch();
    const [ErrorMessage, setErrorMessage] = useState(null); 
    const [isSignIn, setIsSignIn] = useState(true);

    const ToogleForm = () => {
        setIsSignIn(!isSignIn);
    }

    const HandleSubmit = () => {
        //validate form
        const currentEmail = email.current.value;
        const currentPassword = password.current.value;
        const currentFullName = fullName.current ? fullName.current.value : null;

        const message = checkValidData(currentEmail, currentPassword);
        setErrorMessage(message);

        if (message) return;

        //sign in or sign up
        if (!isSignIn) {
            createUserWithEmailAndPassword(auth, currentEmail, currentPassword)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    dispatch(addUser({ uid: user.uid, email: user.email, displayName: currentFullName }));
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    setErrorMessage(errorMessage);
                });
        } else {
            signInWithEmailAndPassword(auth, currentEmail, currentPassword)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    dispatch(addUser({ uid: user.uid, email: user.email, displayName: user.displayName }));
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    setErrorMessage(errorMessage);
                });
        }
    }

    return (
        <div>
            <Header />
            <div className="login-container">
                <img src={BACKGROUND} alt="background-img"></img>
                <form onSubmit={(e) => e.preventDefault()} className="login-form">
                    <div className='login-form-signin'>
                        <h1>{isSignIn ? "Sign In" : "Sign Up"}</h1>
                        {!isSignIn && <input ref={fullName} type='text' placeholder='Full Name'></input>}
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