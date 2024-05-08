import React from 'react';
import { useEffect, useRef, useState } from 'react';

import { motion, useInView } from 'framer-motion';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

import Home from '../home/Home';
import About from '../about/About';
import Header from '../header/Header';
import Resume from '../resume/Resume';
import Skills from '../skills/Skills';
import Contact from '../contact/Contact';
import Projects from '../projects/Projects';
import SidebarHome from '../sidebars/SidebarHome';
import SidebarResume from '../sidebars/SidebarResume';

import '../../scss/main.scss';

const Main: React.FC = () => {
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

	const [scrollTop, setScrollTop] = useState(0);

	// Show the back to top arrow when the user scrolls down
	const onScroll = () => {
		const winScroll = document.documentElement.scrollTop;
		const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
		const scrollArrow = document.querySelector('.backToTop') as HTMLElement;
		const scrolled = Math.round((winScroll / height) * 100);
		setScrollTop(scrolled);

		if (winScroll > 100) {
			scrollArrow.classList.toggle('hidden', false);
		} else {
			scrollArrow.classList.toggle('hidden', true);
		}
	};

	// Scroll to the element with the ID in the URL hash on page load
	useEffect(() => {
		// Get the hash from the URL
		var hash = window.location.hash;
		if (hash) {
			// Remove the # symbol
			hash = hash.substring(1);

			// Scroll to the element
			const element = document.getElementById(hash);
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' });
			}
		}
	}, []);

	// Scroll to the element with the ID in the URL hash when the hash changes
	useEffect(() => {
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return (
		<>
			<div
				className='backToTop hidden'
				onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
				<ArrowCircleUpIcon />
			</div>
			<div className='background-mountains'></div>

			<div className='progressMainWrapper'>
				<div
					className='progressMainStyle'
					style={{ width: `${scrollTop}%` }}></div>
			</div>

			<Container
				maxWidth='xl'
				disableGutters
				className='mainContainer'>
				<Box
					component='section'
					id='home'
					ref={refHome}>
					<Header />
					<motion.div
						style={{
							transform: isHomeInView ? 'none' : 'translateX(200px)',
							opacity: isHomeInView ? 1 : 0,
							transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
						}}>
						<Box
							component='div'
							sx={{ flexGrow: 1 }}
							className='sectionContent'>
							<Grid container>
								<Grid
									item
									xs={12}
									sm={4}
									className='sectionContent-left intro'>
									<SidebarHome />
								</Grid>
								<Grid
									item
									sm={8}
									className='sectionContent-right home'>
									<Home />
								</Grid>
							</Grid>
						</Box>
					</motion.div>
				</Box>
				<Box
					component='section'
					id='about'
					ref={refAbout}>
					<motion.div
						style={{
							transform: isAboutInView ? 'none' : 'translateX(200px)',
							opacity: isAboutInView ? 1 : 0,
							transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
						}}>
						<Box
							component='div'
							sx={{ flexGrow: 1 }}
							className='sectionContent'>
							<Grid container>
								<Grid
									item
									xs={12}
									sm={4}
									className='sectionContent-left intro'></Grid>
								<Grid
									item
									sm={8}
									className='sectionContent-right home'>
									<About />
								</Grid>
							</Grid>
						</Box>
					</motion.div>
				</Box>
				<Box
					component='section'
					id='resume'
					ref={refResume}>
					<motion.div
						style={{
							transform: isResumeInView ? 'none' : 'translateX(200px)',
							opacity: isResumeInView ? 1 : 0,
							transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
						}}>
						<Box
							component='div'
							sx={{ flexGrow: 1 }}
							className='sectionContent'>
							<Grid container>
								<Grid
									item
									xs={12}
									sm={4}
									className='sectionContent-left resume'>
									<SidebarResume />
								</Grid>
								<Grid
									item
									sm={8}
									className='sectionContent-right home'>
									<Resume />
								</Grid>
							</Grid>
						</Box>
					</motion.div>
				</Box>
				<Box
					component='section'
					id='projects'
					ref={refProjects}>
					<motion.div
						style={{
							transform: isProjectsInView ? 'none' : 'translateX(200px)',
							opacity: isProjectsInView ? 1 : 0,
							transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
						}}>
						<Box
							component='div'
							sx={{ flexGrow: 1 }}
							className='sectionContent'>
							<Grid container>
								<Grid
									item
									xs={12}
									sm={4}
									className='sectionContent-left intro'></Grid>
								<Grid
									item
									sm={8}
									className='sectionContent-right home'>
									<Projects />
								</Grid>
							</Grid>
						</Box>
					</motion.div>
				</Box>
				<Box
					component='section'
					id='skills'
					ref={refSkills}>
					<motion.div
						style={{
							transform: isSkillsInView ? 'none' : 'translateX(200px)',
							opacity: isSkillsInView ? 1 : 0,
							transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
						}}>
						<Box
							component='div'
							sx={{ flexGrow: 1 }}
							className='sectionContent'>
							<Grid container>
								<Grid
									item
									xs={12}
									sm={4}
									className='sectionContent-left intro'></Grid>
								<Grid
									item
									sm={8}
									className='sectionContent-right home'>
									<Skills />
								</Grid>
							</Grid>
						</Box>
					</motion.div>
				</Box>
				<Box
					component='section'
					id='contact'
					ref={refContact}>
					<motion.div
						style={{
							transform: isContactInView ? 'none' : 'translateX(200px)',
							opacity: isContactInView ? 1 : 0,
							transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
						}}>
						<Box
							component='div'
							sx={{ flexGrow: 1 }}
							className='sectionContent'>
							<Grid container>
								<Grid
									item
									xs={12}
									sm={4}
									className='sectionContent-left intro'></Grid>
								<Grid
									item
									sm={8}
									className='sectionContent-right home'>
									<Contact />
								</Grid>
							</Grid>
						</Box>
					</motion.div>
				</Box>
			</Container>
		</>
	);
};

export default Main;
