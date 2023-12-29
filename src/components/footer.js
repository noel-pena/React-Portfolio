import React from "react";


function Footer(){
    
    // document.getElementById("foot").innerHTML = "Noel Pena, Inc | Copyright " + year;
    const d = new Date();
    const year = d.getFullYear();

    return(
        <footer className="footer">
            Noel Pena, Inc | Copyright © {year}
        </footer>
    )
}

export default Footer;