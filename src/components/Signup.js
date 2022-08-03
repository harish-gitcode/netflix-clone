import React, { useRef } from 'react'
import { auth } from '../firebase';
import './Signup.css';

function Signup() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);


    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser);
        }).catch((e) => {
            alert(e.message);
        })

    }
    const login = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log("Successfully logged in ");
        }).catch((e) => {
            alert(e.message);
        })
    }

    return (
        <div className="signupScreen">
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} type="email" placeholder="Email address" />
                <input ref={passwordRef} type="password" placeholder="Password" />
                <button type="submit" onClick={login}>Sign In</button>
                <h4>
                    <span className='span_grey'>
                        New to Netflix?  </span>
                    <span className='span_signup' onClick={register}>
                        Sign Up Now
                    </span>
                </h4>
            </form>

        </div>
    )
}

export default Signup;