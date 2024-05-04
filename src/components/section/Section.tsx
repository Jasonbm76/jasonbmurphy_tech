import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Header from '../header/Header';
import Home from '../home/Home';
import SidebarHome from '../sidebars/SidebarHome';
import About from '../about/About';
import Contact from '../contact/Contact';
import Projects from '../projects/Projects';
import Resume from '../resume/Resume';
import Skills from '../skills/Skills';
import SidebarResume from '../sidebars/SidebarResume';

const Section: React.FC = (sectionId) => {
	const leftGridClass = sectionId === 'home' ? 'sectionContent-left intro' : 'sectionContent-left resume';

	let leftSideComponent = null;
	let rightSideComponent = null;

	switch (sectionId) {
		case 'home':
			leftSideComponent = <SidebarHome />;
			rightSideComponent = <Home />;
			break;
		case 'about':
			rightSideComponent = <About />;
			break;
		case 'contact':
			rightSideComponent = <Contact />;
			break;
		case 'projects':
			rightSideComponent = <Projects />;
			break;
		case 'resume':
			leftSideComponent = <SidebarResume />;
			rightSideComponent = <Resume />;
			break;
		case 'skills':
			rightSideComponent = <Skills />;
			break;
		default:
			break;
	}

	return (
		<Box
			component='section'
			id={sectionId.toString()}>
			{sectionId === 'home' ? <Header /> : null};
			<Box
				component='div'
				sx={{ flexGrow: 1 }}
				className='sectionContent'>
				<Grid container>
					<Grid
						item
						xs={12}
						sm={4}
						className={`sectionContent-left #${leftGridClass}`}>
						{leftSideComponent}
					</Grid>
					<Grid
						item
						sm={8}
						className={`sectionContent-right #${sectionId}`}>
						{rightSideComponent}
						{/* {sectionId === 'home'} {<Home />}
            {sectionId === 'about'} <About />
            {sectionId === 'contact'} <Contact />
            {sectionId === 'projects'} <Projects />
            {sectionId === 'resume'} <Resume />
            {sectionId === 'skills'} <Skills /> */}
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
};

export default Section;
