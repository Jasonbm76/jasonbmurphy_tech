import * as React from 'react';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Hidden from '@mui/material/Hidden';
import Header from './components/header/Header';

import './app.scss';

import Home from './components/home/Home';
import Sidebar from './components/sidebar/Sidebar';
import About from './components/about/About';

// const Parallax = () => {
//   return <Box component="section">Parallax</Box>;
// };

const App = () => {
  return (
    <React.Fragment>
      <Container maxWidth="xl" disableGutters>
        <Box component="section" id="home">
          <Header />
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }}>
            <Box sx={{ flexGrow: 1 }} spacing={2} className="sectionContent">
              <Grid container>
                <Grid item xs={12} sm={4} className="sectionContent-left intro">
                  <Sidebar />
                </Grid>
                <Grid item sm={8} className="sectionContent-right home">
                  <Home />
                </Grid>
              </Grid>
            </Box>
          </motion.div>
        </Box>
        <Box component="section" id="about">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }}>
            <Box sx={{ flexGrow: 1 }} spacing={2} className="sectionContent">
              <Grid container>
                <Grid item xs={12} sm={4} className="sectionContent-left intro"></Grid>
                <Grid item sm={8} className="sectionContent-right home">
                  <About />
                </Grid>
              </Grid>
            </Box>
          </motion.div>
        </Box>
        <Box component="section" id="resume">
          <Box component="main" className="sectionContent">
            Resume Contents
          </Box>
        </Box>
        <Box component="section" id="projects">
          <Box component="main" className="sectionContent">
            Projects Contents
          </Box>
        </Box>
        <Box component="section" id="contact">
          <Box component="main" className="sectionContent">
            Contact Contents
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default App;
