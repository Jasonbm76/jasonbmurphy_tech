import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Box';

import './resume.scss';

const resumeBulletPoints = [
	[
		'Managed story prioritization in Jira, collaborating closely with product, UX, and QA teams to ensure bug-free deployments to production. Utilized a Jenkins pipeline and AWS within the CI/CD process to facilitate seamless deployments',
		'Conceptualized, built, and implemented standardized functional React Components',
		'Orchestrated the development of a standardized Design System and reusable component library with Storybook integration',
		'Leveraged front-end data caching libraries and methods (e.g. react-query) to optimize performance, showcasing various data states',
		'Acted as the Front-End Subject Matter Expert, providing valuable insights and guidance to the team',
		'Collaborated with UI/UX designers to transform wireframes and mockups into responsive, user-friendly interfaces for seamless cross-device experiences',
		'Worked Optimizely team to set up A/B testing and slow rollouts',
		'Helped build a Javascript library to consume backend API data with React Query',
		'Redesigned and developed large-scale web projects, including overhauling the front-end of our customer purchase flow and billing portal resulting in a mobile-responsive interface, and boosting conversions by over 5%',
		'Worked on an Agile Scrum team building custom white-label microfrontend software',
		'Conducted thorough peer code reviews to ensure code quality and consistency',
		'Contributed to Change Management processes through BitBucket/Git and managed issues efficiently using Jira',
	],
	[
		'Managed the drilling section of the website which included over 50 pages with Sitecore CMS in order to streamline deployment and allowed us to run A/B testing',
		'Boosted traffic and improved search engine ranking with optimized web content',
		'Built website landing pages for marketing campaigns using HTML, CSS and JavaScript, templated email content and other demand generation assets',
		'Created internal websites used by members of the executive team to track performance metrics',
	],
];

const Resume: React.FC = () => {
	return (
		<div>
			<Typography component='h2'>Resume</Typography>
			<Typography
				component='p'
				className='lead'>
				This is what I&apos;ve been up to in my career
			</Typography>

			<Divider className='horizontal-divider' />

			<Grid
				container
				className='resume-container'>
				<Grid
					item
					xs={12}
					className='resume-content-middle'>
					<Typography component='h4'>Experience</Typography>
				</Grid>

				<Grid
					container
					className='resume-job'>
					<Grid
						item
						xs={2}
						className='resume-content-left'>
						<img
							src='/newfold_logo.jpeg'
							alt='Newfold Digital'
							className='logo'
						/>
					</Grid>
					<Grid
						item
						xs={10}
						className='resume-content-right'>
						<Typography component='h5'>Newfold Digital - Senior Software Engineer</Typography>
						<Typography component='h6'>Feb 2016 - December 2023</Typography>
						<Typography component='p'>
							As a Frontend Subject Matter Expert, I provided invaluable guidance and expertise to multiple teams.
							Notably, during my tenure at Newfold, I spearheaded an initiative to establish a tailored design system
							and component library. Additionally, I contributed to a collaborative effort to develop a unified
							white-label software platform using React. This platform facilitated the seamless integration of multiple
							brands onto a single codebase. I actively conducted numerous A/B experiments to optimize conversion rates
							and meticulously maintained brand consistency throughout our projects. I also mentored junior developers
							and was a key voice in planning sessions.
						</Typography>
						<ul className='resume-bullet-points'>
							{resumeBulletPoints[0].map((point, index) => (
								<li key={index}>{point}</li>
							))}
						</ul>
					</Grid>
				</Grid>

				<Grid
					item
					xs={12}
					className='resume-divider'>
					<Divider />
				</Grid>

				<Grid
					container
					className='resume-job'>
					<Grid
						item
						xs={2}
						className='resume-content-left'>
						<img
							src='/slbdigital_logo.jpeg'
							alt='Schlumberger'
							className='logo'
						/>
					</Grid>
					<Grid
						item
						xs={10}
						className='resume-content-right'>
						<Typography component='h5'>Schlumberger - Senior Web Developer</Typography>
						<Typography component='h6'>Feb 2007 - October 2015</Typography>
						<ul className='resume-bullet-points'>
							{resumeBulletPoints[1].map((point, index) => (
								<li key={index}>{point}</li>
							))}
						</ul>
					</Grid>
				</Grid>

				<Grid
					item
					xs={12}
					className='resume-divider'>
					<Divider />
				</Grid>

				<Grid
					container
					className='resume-job'>
					<Grid
						item
						xs={2}
						className='resume-content-left'>
						<img
							src='/us_army_logo.jpeg'
							alt='US Army'
							className='logo'
						/>
					</Grid>
					<Grid
						item
						xs={10}
						className='resume-content-right'>
						<Typography component='h5'>US Army - Airborne Ranger &amp; Recruiting and Retention Officer</Typography>
						<Typography component='h6'>Honorably Discharged</Typography>
					</Grid>
				</Grid>

				<Grid
					item
					xs={12}
					className='resume-divider'>
					<Divider />
				</Grid>

				<Grid
					item
					xs={12}
					className='resume-content-middle'>
					<Typography component='h4'>Education</Typography>
				</Grid>

				<Grid
					item
					xs={12}
					className='resume-content-right education'>
					<Typography component='h5'>The Art Institute of Houston</Typography>
					<Typography component='h6'>Bachelor of Fine Arts (B.F.A.), Graphics &amp; Web Design</Typography>
				</Grid>

				<Grid
					item
					xs={12}
					className='resume-content-right education'>
					<Typography component='h5'>The Art Institute of Houston</Typography>
					<Typography component='h6'>Associate of Applied Science (A.A.S.), Interactive Media</Typography>
				</Grid>
			</Grid>
		</div>
	);
};

export default Resume;
