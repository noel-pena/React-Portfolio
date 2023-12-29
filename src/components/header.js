import React, { useState } from "react";


function Header(){
    
    function tellTime(){
        const d = new Date();
        const time = d.getHours();
        if(time >= 0 && time < 12){
            return("Good morning.");
        }
        if(time >= 12 && time < 15){
            return("Good afternoon.");
        }
        if(time >= 15 && time < 24){
            return("Good evening.");
        }
    };

    return(
    <header className="header">
        <a href="/" className="logo">{tellTime()}</a>
        <nav className="navbar">
            <a href="/">Contact</a>
            <a href="/">GitHub</a>
            <a href="/">Resume</a>
        </nav>
    </header>
    )
}

export default Header