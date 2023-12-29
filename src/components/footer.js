import React from "react";


function Footer(){
    
    const d = new Date();
    const year = d.getFullYear();

    return(
    <div className="footer">
        <footer >
            Noel Pena, Inc | Copyright © {year}
        </footer>
    </div>
    )
}

export default Footer;