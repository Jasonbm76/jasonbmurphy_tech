import React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Hidden from '@mui/material/Hidden';
import Typography from '@mui/material/Box';

import './home.scss';

function Home() {
  return (
    <Box sx={{ flexGrow: 1 }} className="sectionContent">
      <Grid container spacing={2}>
        <Hidden smDown>
          <Grid item xs={0} sm={4} className="sectionContent-left intro">
            <a className="photo" href="/">
              <img src="../public/jason.jpeg" alt="" />
            </a>

            <h2>Jason Murphy</h2>
            <p>
              <a href="mailto:jasonbm76@gmail.com">jasonbm76@gmail.com</a>
            </p>
          </Grid>
        </Hidden>
        <Grid item sm={8} className="sectionContent-right home">
          <Typography variant="h2" component="h2">
            About this site
          </Typography>
          <Typography variant="body1" component="p" className="lead">
            This site was built with React, Material-UI, SASS, and Framer Motion. It is a single-page application with a responsive design and accessible
            content.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
