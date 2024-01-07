import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';


// const resetField = () => {
//     const [inputValue, setinputValue] = useState("")

//     function handleSubmit(event) {
//         event.preventDefault();
//         setinputValue("");
//         console.log("Email sent.");
//     }

//     function handleChange(event){
//         setinputValue(event.target.value);
//     }
// }

export const ContactUs = () => {
    const form = useRef();
    function sendEmail(e){

        e.preventDefault();

        emailjs.sendForm('service_o3dp98i', 'template_bqt3owm', form.current, 'C-mcBd9rkRtbWb99j')
            .then((result) => {
            console.log(result.text);
            console.log('message sent')
            }, (error) => {
            console.log(error.text);
            setinputValue('')
        });
        alert('Email sent.')
    };

    return (
    <Grid container xs={12} sx={{pb: -5}} className='form-container'>
            <form ref={form} onSubmit={sendEmail}>
        <Grid item s={6} sx={{mt: 10, p: 2}}>
            <input className='form form-item'  type="text" name="user_name" placeholder='Name' required/>
        </Grid>
        <Grid item xs={12} sx={{p: 2}}>
            <input className='form form-item' sx={{width: 1}}  type="email" name="user_email" placeholder='Email'  required/>
        </Grid>
        <Grid item xs={12} sx={{p: 2}}>
            <textarea sx={{width: 1}} className='form' name="message" placeholder='Message'  rows={9} required/>
        </Grid>
        <Grid item xs={12} sx={{pb: 3}}>
        <Button sx={{backgroundColor: "#5a5a5a"}}  type="submit" value="Send" variant="contained" 
        >Send</Button>
        </Grid>
            </form>
    </Grid>
);
};