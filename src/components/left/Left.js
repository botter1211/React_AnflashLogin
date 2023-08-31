import React from 'react'
import './Left.css'

export default function Left() {
  return (
    <div className="left">
        <div className="left-bottom">
            <div className="left-bottom-content">
                <p className="solid"><span>or Sign in with:</span></p>
                <button>Sign in with <span>Google</span></button>
                <button>Sign in with <span>Facebook</span></button>
            </div>
        </div>
    </div>
  )
}
