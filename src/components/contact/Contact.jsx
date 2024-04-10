import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Hidden from '@mui/material/Hidden';
import Typography from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Textarea from '@mui/joy/Textarea';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

import './contact.scss';

const Contact = () => {
  const form = useRef();
  const [errorOpen, setErrorOpen] = React.useState(false);
  const [successOpen, setSuccessOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setErrorOpen(false);
    setSuccessOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // const name = e.target.name.value;
    // const email = e.target.email.value;
    // const message = e.target.message.value;

    // const emailForm = { from_name: name, email_id: email, message: message };

    // const mailOptions = {
    //   from: 'jasonbm76@gmail.com',
    //   to: email,
    //   name: name,
    //   text: message,
    // };

    /*
    emailjs.send("service_ijwrfcd","template_euwfa49",{
    name: "Jason B Murphy",
    message: "Testing new message",
    reply_to: "jasonbm76@gmail.com",
    });
    */

    emailjs
      .sendForm('service_ijwrfcd', 'template_euwfa49', form.current, {
        publicKey: 'XQ9kFF5BwgvXh4hOB',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setSuccessOpen(true);
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          setErrorOpen(true);
        }
      );
  };

  return (
    <div>
      <Typography variant="h2" component="h2">
        Contact Me
      </Typography>

      <Typography variant="body1" component="p" className="lead">
        Something witty?
      </Typography>

      <Divider className="horizontal-divider" />

      <Box component="form" ref={form} noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField autoComplete="given-name" name="name" required fullWidth id="name" label="Name" autoFocus />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField required fullWidth id="email" label="Email Address" name="reply_to" autoComplete="email" />
          </Grid>
          <Grid item xs={12}>
            <Textarea required placeholder="Type your message…" defaultValue="" id="message" name="message" minRows={5} maxRows={10} />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
          Send Message
        </Button>
        <Snackbar open={successOpen} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" variant="filled" sx={{ width: '100%' }}>
            Your message has been successfully sent.
          </Alert>
        </Snackbar>
        <Snackbar open={errorOpen} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" variant="filled" sx={{ width: '100%' }}>
            Message failed to send. Please try again.
          </Alert>
        </Snackbar>
      </Box>
    </div>
  );
};

export default Contact;
