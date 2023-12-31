import React from "react";
import Footer from './footer';
import Header from './header';
import Body from './body';
import { Route, Router, Routes } from "react-router-dom";
import { Switch } from "@mui/material";

function App(){

    return(
    <div>
        <Header />
        <Body />
        <Footer />
    </div>
    )
}

export default App