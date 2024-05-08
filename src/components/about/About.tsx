import Typography from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import '../../scss/about.scss';

const About: React.FC = () => {
	return (
		<div>
			<Typography component='h2'>About Me</Typography>
			<Typography
				component='p'
				className='lead'>
				&rsquo;There&apos;s always room on the extra mile&rsquo; - J.R. Grffith (Director of Ed at AIH)
			</Typography>
			<Divider className='horizontal-divider' />
			<Typography component='h5'>Professionally</Typography>
			<Typography
				component='p'
				className='welcome'>
				A Senior Software Engineer with over 20 years of experience in designing, implementing, and optimizing micro
				frontend and API-driven architectures. I am a frontend expert and a React.js enthusiast, with hands-on
				experience in creating modular, scalable, and responsive frontend components using React.js, Bootstrap, Material
				UI, and other frameworks and libraries.
			</Typography>
			<Typography
				component='p'
				className='welcome'>
				I have a passion for innovation and efficiency, and I enjoy collaborating with cross-functional teams to deliver
				high-quality solutions that exceed client expectations. One of my key achievements is designing and developing a
				full Design System that streamlines the styling and branding of our web applications across products and
				devices. I am also skilled in building RESTful APIs and integrating backend services, ensuring efficient data
				flow and improved user experience. I am eager to leverage my expertise and contribute to the development of
				cutting-edge applications in a dynamic and growth-oriented environment.
			</Typography>
			<Divider className='horizontal-divider' />
			<Typography component='h5'>Personally</Typography>
			<Typography
				component='p'
				className='welcome'>
				I am a dedicated husband and father of two beautiful children. I enjoy spending time with my family, exploring
				new places, and trying new foods. I am an avid sports fan and also love wood working and building stuff in my
				spare time. One thing that I really take pride in is my ability to learn things and challenge myself both
				professionally and in my personal life and so far it has been a great journey.
			</Typography>
		</div>
	);
};

export default About;
