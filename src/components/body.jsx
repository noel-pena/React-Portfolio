import * as React from "react";
import EmailIcon from "@mui/icons-material/Email";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import { useNavigate } from "react-router-dom";
import Carousel from "./carousel";

function Body() {
  const navigate = useNavigate();

  const handleNav = () => {
    navigate("/contact");
  };

  return (
    <Grid container>
      <div
        className="img"
        style={{ position: "fixed", top: "83%", left: "2%" }}
      >
        <Box sx={{ "& > :not(style)": { m: 1 } }}>
          <Fab sx={{ color: "gray" }} aria-label="add">
            <EmailIcon onClick={handleNav} />
          </Fab>
        </Box>
      </div>
      <Grid container className="container">
        <Grid item xs={12} md={6}>
          <img
            className="profile-pic"
            src="/img/IMG_0430.PNG"
            alt="profile picture"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <h1>Full-stack developer.</h1>
          <p className="quote">
            "Hard work beats talent when talent doesn't work hard." - Tim Notke
          </p>
        </Grid>
      </Grid>
      <Grid xs={12} md={4} className="container-2">
        <h1 className="about">About Me</h1>
        <div className="container-3">
          <p>
            My name is Noel Pena and I am a web developer. I code mainly in
            React.js. On my free time, I am a photographer and also do a lot of
            photo editing. I am a music producer on the side where I primarily
            work with virtual and live instruments. If you're interested in my
            work, please feel free to contact me. You may also download a copy
            of my resume under the resume link.
          </p>
        </div>
      </Grid>
      <Grid xs={12} md={4} className="container-4">
        <h1 className="about">Skills</h1>
        <div className="container-5">
          <p>
            HTML • CSS • Flexbox • Grid • Bootstrap • Javascript • DOM
            Manipulation • jQuery • Bash Command Line • Git, GitHub and Version
            Control • Backend Web Development • Node.js • NPM • Express.js • EJS
            • REST • APIs • Databases • SQL • PostgreSQL • Mysql •
            Authentication • oauth • Password hashing • React.js • Web Design •
            Deployment with GitHub Pages • MUI React{" "}
          </p>
        </div>
      </Grid>
      <Grid xs={12} md={4} className="container-2">
        <h1 className="about">Portfolio</h1>
        <div className="container-3">
          <Carousel />
        </div>
      </Grid>
    </Grid>
  );
}

export default Body;
