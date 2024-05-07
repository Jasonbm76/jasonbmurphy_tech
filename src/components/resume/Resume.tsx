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
		'Managed the drilling section of the website which included over 50 pages with Sitecore CMS',
		'Boosted traffic and improved search engine ranking with optimized web content',
		'Built website landing pages, email content and other demand generation assets',
		'Created internal websites used by members of the executive team to track performance metrics',
	],
	[
		'Responsible for the design and programming of our company website and interactive CD’s',
		'Designed and built of 35 client websites in HTML with CSS which have been honored with multiple state and national awards in the home building industry for website design and ease of use',
		'Design and programming of Flash presentations as well as graphics for ads, billboards, newspaper, and magazines for national home builders',
		'Numerous projects creating dynamic Flash applications that interact with server-side web pages and XML files to retrieve data from and send data to databases. Also responsible for company IT support and creative thinking towards ideas to save the company time and resources',
	],
	[
		'Promoted to Sgt / E-5 in 4 years',
		'Responsible for up to 5 soldiers directly under my command',
		'Achieved a near perfect score in front of a promotion board of senior peers',
		'Received numerous awards and decorations totaling 11 for achievements and discipline',
		'Participated in test program for Army recruiting as one of the youngest recruiters in the history of the US Army',
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
							src='/customervelocity_logo.jpeg'
							alt='Customer Velocity'
							className='logo'
						/>
					</Grid>
					<Grid
						item
						xs={10}
						className='resume-content-right'>
						<Typography component='h5'>Customer Velocity - Senior Interactive Programmer</Typography>
						<Typography component='h6'>Dec 2002 - Feb 2007</Typography>
						<ul className='resume-bullet-points'>
							{resumeBulletPoints[2].map((point, index) => (
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
						<Typography component='h6'>Nov 1995 - June 2001</Typography>
						<ul className='resume-bullet-points'>
							{resumeBulletPoints[3].map((point, index) => (
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
					item
					xs={12}
					className='resume-content-middle'>
					<Typography component='h4'>Education</Typography>
				</Grid>

				<Grid
					item
					xs={12}
					className='resume-content-right education'>
					<Typography component='h5'>The Art Institute of Houston (2012 - 2014)</Typography>
					<Typography component='h6'>Bachelor of Fine Arts (B.F.A.), Graphics &amp; Web Design</Typography>
				</Grid>

				<Grid
					item
					xs={12}
					className='resume-content-right education'>
					<Typography component='h5'>The Art Institute of Houston (2001 - 2003)</Typography>
					<Typography component='h6'>Associate of Applied Science (A.A.S.), Interactive Media</Typography>
				</Grid>
			</Grid>
		</div>
	);
};

export default Resume;
