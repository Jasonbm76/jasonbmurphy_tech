import * as React from 'react';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Hidden from '@mui/material/Hidden';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';

import './app.scss';

import Home from './components/home/Home';

// const Parallax = () => {
//   return <Box component="section">Parallax</Box>;
// };

const App = () => {
  return (
    <React.Fragment>
      <Container maxWidth="xl" disableGutters>
        <Box component="section" id="home">
          <Header />
          <Home />
        </Box>
        <Box component="section" id="about">
          <Box component="main" className="sectionContent">
            About Contents
          </Box>
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
