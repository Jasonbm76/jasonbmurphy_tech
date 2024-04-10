import * as React from 'react';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import './app.scss';

// const Parallax = () => {
//   return <Box component="section">Parallax</Box>;
// };

const App = () => {
  return (
    <React.Fragment>
      <Container maxWidth="xl" disableGutters>
        <Box component="section">
          <Header />
        </Box>
        <Box component="section" id="about">
          About
        </Box>
        <Box component="section" id="resume">
          Resume
        </Box>
        <Box component="section" id="projects">
          Projects
        </Box>
        <Box component="section" id="contact">
          Contact
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default App;
