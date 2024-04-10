import React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Hidden from '@mui/material/Hidden';
import Typography from '@mui/material/Box';

import { motion } from 'framer-motion';

import './home.scss';

function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }}>
      <Box sx={{ flexGrow: 1 }} spacing={2} className="sectionContent">
        <Grid container>
          <Grid item xs={12} sm={4} className="sectionContent-left intro">
            <a className="photo" href="/">
              <img src="/jason.jpeg" alt="Photo of Jason" />
            </a>

            <Typography variant="h2" component="h2" className="intro-name">
              Jason Murphy
            </Typography>
            <Typography variant="body1" component="p" className="email-info">
              <EmailOutlinedIcon className="email-icon" />
              <a href="mailto:jasonbm76@gmail.com" title="Send me an email" className="email-link">
                jasonbm76@gmail.com
              </a>
            </Typography>

            {/* <Divider className="horizontal-divider" /> */}

            <Typography variant="h6" component="h6" className="briefly">
              Briefly
            </Typography>

            <Typography variant="body1" component="p" className="briefly-content">
              Hey there, my name is Jason and I&apos;m a web developer. I specialize in front-end development and I&apos;m passionate about creating beautiful,
              responsive, and accessible websites.
            </Typography>

            <Button variant="outlined" className="learn-more">
              Learn More
            </Button>
          </Grid>

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
    </motion.div>
  );
}

export default Home;
