import '../utils/login.css';
import Header from "./header";
import { useState } from 'react';

const Login = () => {

    const [isSignIn, setIsSignIn] = useState(true);

    const toogleForm = () => {
        setIsSignIn(!isSignIn);
    }

    return (
        <div>
            <Header/>
            <div className="login-container">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/IN-en-20250127-TRIFECTA-perspective_cf66f5a3-d894-4185-9106-5f45502fc387_small.jpg" alt="background-img"></img>
                <form className="login-form">
                <div className='login-form-signin'>
                    <h1>{isSignIn ? "Sign In" : "Sign Up"}</h1>
                    <input type="email" placeholder="Email"></input>
                    <input type="password" placeholder="Password"></input>
                    <button>{isSignIn ? "Sign In" : "Sign Up"}</button>
                </div>
                {isSignIn ? 
                    <div className="login-form-signup">
                        <span>New to Netflix? <b onClick={toogleForm}>Sign up now</b></span>
                    </div> : 
                    <div className="login-form-signup"><span>Already a user? <b onClick={toogleForm}>Sign in now</b></span></div>
                }
            </form>
            </div>
        </div>
    );
}

export default Login;