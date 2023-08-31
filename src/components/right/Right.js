import React from 'react'
import './Right.css'
import logo from './logo.png'

export default function Right() {
  return (
    <div className="right">
        <div className="container">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="login">
                    <h1>Login</h1>
                    <div className="signin">
                        <input type="text" placeholder="Username"/>
                        <input type="text" placeholder="Password"/>
                    </div>
                    <div className="remember">
                        <div><input type="checkbox"/>Remember me</div>
                        <a href="">Forgot password?</a>
                    </div>
                    <button>LOGIN</button>
                    <div className="signup">
                        <p>Don't have an account?</p>
                        <a href="">Sign up</a>
                    </div>
                </div>
                <div className="right-bottom">
                    <p> © 2022 ANFLASH TECHNOLOGY. All rights reserved.</p>
                </div>
            </div>
        </div>
  )
}
