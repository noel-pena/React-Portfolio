import React from "react";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';

function Body(){
    return(
    <div>
        <div className="container">
            {/* eslint-disable-next-line */}
            <img className="profile-pic" src="/img/IMG_0430.PNG" alt="profile picture"/>
            <h1 className="wrap-text">Javascript full-stack programmer.</h1>
            <p className="quote wrap-text">"Hard work beats talent when talent doesn't work hard." - Tim Notke</p>
        </div>
        <div className="container-2">
                <h1 className="about">About Me</h1>
            <div className="container-3">
                <p>My name is Noel Pena and I am web developer. I specialize in Javascript and primarily work with React. In my free time, I enjoy doing photography so I work well with photography and photo editing. I also do music production on the side where I primarily work with virtual and live instruments. If you're interested in my work, please feel free to contact me.</p>
            </div>
        </div>
        <div className="container-4">
                <h1 className="about">Skills</h1>
            <div className="container-5">
                <p>HTML • CSS • Flexbox • Grid • Bootstrap • Javascript • DOM Manipulation • jQuery • Bash Command Line • Git, GitHub and Version Control • Backend Web Development • Node.js • NPM • Express.js • EJS • REST • APIs • Databases • SQL • PostgreSQL • Mysql • Authentication • oauth • Password hashing • Firebase • React.js • Web Design • Deployment with GitHub Pages • MUI React </p>
            </div>
        </div>
        <div className="container-2">
                <h1 className="about">Experience</h1>
            <div className="container-3">
                <p>My name is Noel Pena and I am web developer. I specialize in Javascript and primarily work with React. In my free time, I enjoy doing photography so I work well with photography and photo editing. I also do music production on the side where I primarily work with virtual and live instruments. If you're interested in my work, please feel free to contact me.</p>
            </div>
        </div>
    </div>
        
    )
}

export default Body