import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Box';
import Link from '@mui/material/Link';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { HStack } from '@chakra-ui/react';

import './home.scss';

const socials = [
	{
		icon: <EmailIcon />,
		url: 'mailto: jasonbm76@gmail.com',
		title: 'Email me',
	},
	{
		icon: <GitHubIcon />,
		url: 'https://github.com/jasonbm76',
		title: 'View my Github link',
	},
	{
		icon: <LinkedInIcon />,
		url: 'https://www.linkedin.com/in/jasonbm76',
		title: 'View my LinkedIn profile',
	},
];

function Home() {
	return (
		<div>
			<Typography
				variant='h2'
				component='h2'>
				About this site
			</Typography>
			<Typography
				variant='body1'
				component='p'
				className='lead'>
				This site was built with React, Material-UI, SASS, and Framer Motion. It
				is a single-page application with a responsive design and accessible
				content.
			</Typography>
			<Divider className='horizontal-divider' />
			<Typography
				variant='body1'
				component='p'
				className='welcome'>
				Welcome to my website. Here you can learn{' '}
				<a
					href='#about'
					title='About Me'>
					about me
				</a>
				, view{' '}
				<a
					href='#resume'
					title='View My Resume'>
					my resume
				</a>
				, see a sample of{' '}
				<a
					href='#projects'
					title='View My Projects'>
					projects I&apos;ve worked on
				</a>
				, check out{' '}
				<a
					href='#resume'
					title='View My Skills'>
					my skills
				</a>
				, or{' '}
				<a
					href='#contact'
					title='Contact Me'>
					contact me
				</a>
				. Feel free to explore the site and reach out if you&apos;d like to.
			</Typography>
			<Typography
				variant='body1'
				component='p'
				className='welcome'>
				GitHub source available{' '}
				<a
					href='https://github.com/Jasonbm76/jasonmurphy_tech'
					title='View my Github link'
					target='_blank'
					rel='noreferrer'>
					here
				</a>
				. You can also find me on LinkedIn{' '}
				<a
					href='https://www.linkedin.com/in/jasonbm76'
					target='_blank'
					title='View my LinkedIn profile'
					rel='noreferrer'>
					here
				</a>
				.
			</Typography>
			<nav>
				<HStack spacing={15}>
					{socials.map(({ icon, url, title }) => (
						<a
							key={url}
							href={url}
							className='socialLink'
							title={title}
							target='_blank'
							rel='noreferrer'>
							{icon}
						</a>
					))}
				</HStack>
			</nav>
		</div>
	);
}

export default Home;
