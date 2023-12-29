import React, { useState } from "react";
import Footer from './footer'
import Header from './header'

function App(){
    const [greet, setGreet] = useState("")

    function tellTime(){
        const d = new Date();
        const time = d.getHours();
        if(time >= 0 && time < 12){
            setGreet("Good morning.");
        }
        if(time >= 12 && time < 15){
            setGreet("Good afternoon.");
        }
        if(time >= 15 && time < 24){
            setGreet("Good evening.");
        }
    };

    return(
    <div>
        <Header />
        <h1>Test</h1>
        <Footer />
    </div>
    )
}

export default App