import React, { useState } from 'react'
import './Login.css'
import Signup from './Signup'

const Login = () => {

    const [login, setLogin] = useState(false)
    const [signup, setSignup] = useState(false)
    const [email, setEmail] = useState('')


    return (
        <div className='homeScreen'>
            <div className='homeScreen_background'>
                <img className='homeScreen_logo' src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' alt='' />
                <button className='homeScreen_button' onClick={(e) => {
                    e.preventDefault()
                    setLogin(true)
                }}>Sign In</button>
                <div className='homeScreen_gradient' />
            </div>
            <div className='homeScreen_body'>
                {login ? (
                    <Signup />
                ) : (
                    <>
                        <h1>Unlimited movies, TV shows and more.</h1>
                        <h2>Watch anywhere. Cancel anytime.</h2>
                        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                        <div className='homeScreen_input'>
                            <form>
                                <input type='email' placeholder='Email address' />
                                <button className='homeScreen_input_button' onClick={(e) => {
                                    e.preventDefault()
                                    setLogin(true)
                                }}>GET STARTED</button>
                            </form>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default Login