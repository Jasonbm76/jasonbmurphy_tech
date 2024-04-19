import * as React from 'react';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Header from './components/header/Header';

import './app.scss';

import Home from './components/home/Home';
import SidebarHome from './components/sidebars/SidebarHome';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Projects from './components/projects/Projects';
import Resume from './components/resume/Resume';
import Skills from './components/skills/Skills';
import SidebarResume from './components/sidebars/SidebarResume';

const App = () => {
  const refHome = useRef(null);
  const refAbout = useRef(null);
  const refResume = useRef(null);
  const refProjects = useRef(null);
  const refContact = useRef(null);
  const refSkills = useRef(null);
  const isHomeInView = useInView(refHome, { once: true });
  const isAboutInView = useInView(refAbout, { once: true });
  const isResumeInView = useInView(refResume, { once: true });
  const isProjectsInView = useInView(refProjects, { once: true });
  const isContactInView = useInView(refContact, { once: true });
  const isSkillsInView = useInView(refSkills, { once: true });

  return (
    <React.Fragment>
      <div className="background-mountains">
        <img src="/mountains.png" alt="Background" />
      </div>

      <Container maxWidth="xl" disableGutters className="mainContainer">
        <Box component="section" id="home" ref={refHome}>
          <Header />
          <motion.div
            style={{
              transform: isHomeInView ? 'none' : 'translateX(200px)',
              opacity: isHomeInView ? 1 : 0,
              transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
            }}
          >
            <Box sx={{ flexGrow: 1 }} spacing={2} className="sectionContent">
              <Grid container>
                <Grid item xs={12} sm={4} className="sectionContent-left intro">
                  <SidebarHome />
                </Grid>
                <Grid item sm={8} className="sectionContent-right home">
                  <Home />
                </Grid>
              </Grid>
            </Box>
          </motion.div>
        </Box>
        <Box component="section" id="about" ref={refAbout}>
          <motion.div
            style={{
              transform: isAboutInView ? 'none' : 'translateX(200px)',
              opacity: isAboutInView ? 1 : 0,
              transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
            }}
          >
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
        <Box component="section" id="resume" ref={refResume}>
          <motion.div
            style={{
              transform: isResumeInView ? 'none' : 'translateX(200px)',
              opacity: isResumeInView ? 1 : 0,
              transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
            }}
          >
            <Box sx={{ flexGrow: 1 }} spacing={2} className="sectionContent">
              <Grid container>
                <Grid item xs={12} sm={4} className="sectionContent-left resume">
                  <SidebarResume />
                </Grid>
                <Grid item sm={8} className="sectionContent-right home">
                  <Resume />
                </Grid>
              </Grid>
            </Box>
          </motion.div>
        </Box>
        <Box component="section" id="projects" ref={refProjects}>
          <motion.div
            style={{
              transform: isProjectsInView ? 'none' : 'translateX(200px)',
              opacity: isProjectsInView ? 1 : 0,
              transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
            }}
          >
            <Box sx={{ flexGrow: 1 }} spacing={2} className="sectionContent">
              <Grid container>
                <Grid item xs={12} sm={4} className="sectionContent-left intro"></Grid>
                <Grid item sm={8} className="sectionContent-right home">
                  <Projects />
                </Grid>
              </Grid>
            </Box>
          </motion.div>
        </Box>
        <Box component="section" id="skills" ref={refSkills}>
          <motion.div
            style={{
              transform: isSkillsInView ? 'none' : 'translateX(200px)',
              opacity: isSkillsInView ? 1 : 0,
              transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
            }}
          >
            <Box sx={{ flexGrow: 1 }} spacing={2} className="sectionContent">
              <Grid container>
                <Grid item xs={12} sm={4} className="sectionContent-left intro"></Grid>
                <Grid item sm={8} className="sectionContent-right home">
                  <Skills />
                </Grid>
              </Grid>
            </Box>
          </motion.div>
        </Box>
        <Box component="section" id="contact" ref={refContact}>
          <motion.div
            style={{
              transform: isContactInView ? 'none' : 'translateX(200px)',
              opacity: isContactInView ? 1 : 0,
              transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
            }}
          >
            <Box sx={{ flexGrow: 1 }} spacing={2} className="sectionContent">
              <Grid container>
                <Grid item xs={12} sm={4} className="sectionContent-left intro"></Grid>
                <Grid item sm={8} className="sectionContent-right home">
                  <Contact />
                </Grid>
              </Grid>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default App;
