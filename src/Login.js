import React from 'react'
import "./Login.css"
import { loginUrl } from './spotify'

function Login() {
    return (
        <div className = "login">
            <img src = "/images/logo.png" alt = ""/>

            <a href= {loginUrl}> LOGIN WITH DREDD BEATS</a>
            
        </div>
    )
}

export default Login
