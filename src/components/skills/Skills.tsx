import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Box';
import Skillbar from 'react-skillbars';

import './skills.scss';

const Skills: React.FC = () => {
	// , color: { bar: '#388e3c' }
	// #2A3877
	const skills = [
		{
			type: 'React',
			level: 80,
			color: {
				bar: '#4E458B',
				title: { text: '#fff', background: '#4E458B' },
			},
		},
		{
			type: 'JavaScript',
			level: 85,
			color: {
				bar: '#4E458B',
				title: { text: '#fff', background: '#4E458B' },
			},
		},
		{
			type: 'Typescript',
			level: 75,
			color: {
				bar: '#4E458B',
				title: { text: '#fff', background: '#4E458B' },
			},
		},
		{
			type: 'Node.js',
			level: 75,
			color: {
				bar: '#4E458B',
				title: { text: '#fff', background: '#4E458B' },
			},
		},
		{
			type: 'HTML',
			level: 95,
			color: {
				bar: '#885CA9',
				title: { text: '#fff', background: '#885CA9' },
			},
		},
		{
			type: 'CSS',
			level: 95,
			color: {
				bar: '#885CA9',
				title: { text: '#fff', background: '#885CA9' },
			},
		},
		{ type: 'UX', level: 65 },
		{ type: 'Git', level: 75 },
		{
			type: 'Python',
			level: 35,
			color: {
				bar: '#F4AEA5',
				title: { text: '#fff', background: '#cc847c' },
			},
		},
		{
			type: 'PHP',
			level: 25,
			color: {
				bar: '#F4AEA5',
				title: { text: '#fff', background: '#cc847c' },
			},
		},
		{
			type: 'Perl',
			level: 15,
			color: {
				bar: '#F4AEA5',
				title: { text: '#fff', background: '#cc847c' },
			},
		},
		{
			type: 'ASP.net',
			level: 15,
			color: {
				bar: '#F4AEA5',
				title: { text: '#fff', background: '#cc847c' },
			},
		},
		{
			type: 'SQL',
			level: 15,
			color: {
				bar: '#F4AEA5',
				title: { text: '#fff', background: '#cc847c' },
			},
		},
	];

	const colors = {
		bar: '#3498db',
		title: {
			text: '#fff',
			background: '#2980b9',
		},
	};

	return (
		<div>
			<Typography component='h2'>Skills</Typography>
			<Typography
				component='p'
				className='lead'>
				This is kinda silly and fluid but this is how I rate myself on various skills
			</Typography>
			<Divider className='horizontal-divider' />
			<div className='skills'>
				<Skillbar
					skills={skills}
					colors={colors}
				/>
			</div>
			<Typography component='h5'>Related Skills/Experience</Typography>
			<Typography
				component='p'
				className='related'>
				MFE (Micro Frontend), Agile, Scrum, Kanban, JIRA, Confluence, Bitbucket, GitHub, Docker, RESTful APIs, Webpack,
				Babel, ESLint, Prettier, Jest, Cypress, Selenium, Jenkins, Figma, Sketch, Adobe XD, Photoshop, Illustrator,
				InDesign, Premiere Pro, After Effects, Audition, Lightroom, Flash (RIP)
			</Typography>
		</div>
	);
};

export default Skills;
