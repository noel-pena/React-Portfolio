import React from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import theme from "./theme";
import { useNavigate } from 'react-router-dom';




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

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    function DirectionStack() {
        return (
        <div>
            <Stack direction="row" spacing={2} justifyContent="center">
                <Button theme={theme} variant="text" sx={{ color: '#6b6b6b' }} >Contact</Button>
                <Button theme={theme} variant="text" sx={{ color: '#6b6b6b' }} href="https://github.com/noel-pena">GitHub</Button>
                <Button theme={theme} variant="text" sx={{ color: '#6b6b6b' }}>Resume</Button>
            </Stack>
        </div>
        );
    }

    return(
    <header className="header">
        <a href="/" className="logo">{tellTime()}</a>
        <DirectionStack />
    </header>
    )
}

export default Header