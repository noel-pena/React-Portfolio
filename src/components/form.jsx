import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';


export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o3dp98i', 'template_bqt3owm', form.current, 'C-mcBd9rkRtbWb99j')
      .then((result) => {
          console.log(result.text);
          console.log('message sent')
      }, (error) => {
          console.log(error.text);

      });
  };

  

  return (
    <Grid container sx={{mb: -11}} className='form-container'>
            <form ref={form} onSubmit={sendEmail}>
        <Grid item s={6} sx={{mt: 10, p: 2}}>
            <input className='form form-item' type="text" name="user_name" placeholder='Name' />
        </Grid>
        <Grid item xs={12} sx={{p: 2}}>
            <input className='form form-item' sx={{width: 1}} type="email" name="user_email" placeholder='Email'/>
        </Grid>
        <Grid item xs={12} sx={{p: 2}}>
            <textarea sx={{width: 1}} className='form' name="message" placeholder='Message' rows={9}/>
        </Grid>
        <Grid item xs={12} sx={{pb: 3}}>
        <Button sx={{backgroundColor: "#5a5a5a"}} type="submit" value="Send" variant="contained">Send</Button>
        </Grid>
            </form>
    </Grid>
);
};