import React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Hidden from '@mui/material/Hidden';
import Typography from '@mui/material/Box';

import './contact.scss';

const Contact = () => {
  return (
    <div>
      <Typography variant="h2" component="h2">
        Contact Me
      </Typography>
      <Typography variant="body1" component="p" className="lead">
        Something witty?
      </Typography>
      <Divider className="horizontal-divider" />
      <Typography variant="body1" component="p" className="welcome">
        Contact form would go below
      </Typography>
    </div>
  );
};

export default Contact;
