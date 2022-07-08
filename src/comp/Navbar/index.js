import React from 'react'
import logo from "../../logo.png"
import "./style.css"

function Navbar() {
    return (
        <div className="navbar">
            <img src={logo} className="logo" />
            <p>Generate Resume</p>
        </div>
    )
}

export default Navbar