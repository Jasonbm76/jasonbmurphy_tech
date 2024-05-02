import React, { Component } from 'react';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import { CardActionArea } from '@mui/material';
import { Stack } from '@mui/material';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './projects.scss';

const projectsArray = [
	{
		id: 1,
		link: 'https://www.hostgator.com/',
		name: 'HostGator Homepage',
		image: '/hostgator.jpg',
		alt: 'HostGator Screenshot',
		description:
			'Throughout the website there are many challenging areas where we have to fit a dynamic number of plan tiers with dynamic text into the flow of the website and have it look great on all devices.',
	},
	{
		id: 2,
		link: 'https://www.bluehost.com/',
		name: 'Bluehost Homepage',
		image: '/bluehost.jpg',
		alt: 'Bluehost Screenshot',
		description:
			'Bluehost is one of many brands owned by Newfold Digital. This is the front end of the Bluehost website that I worked on. I also spent considerable time working on the customer portal and signup flow for the website.',
	},
	{
		id: 3,
		link: 'https://www.bluehost.com/hosting/shared#pricing-cards',
		name: 'BlueHost Plan Selection',
		image: '/bluehost2.jpg',
		alt: 'BlueHost Screenshot',
		description:
			'Throughout the website there are many challenging areas where we have to fit a dynamic number of plan tiers with dynamic text into the flow of the website and have it look great on all devices.',
	},
	{
		id: 4,
		link: 'https://www.web.com/',
		name: 'Web.com Homepage',
		image: '/web_com.jpg',
		alt: 'Web.com Screenshot',
		description:
			'The challenge here was making a website that was dynamic and could be used for multiple brands. The website is used for Web.com, Domain.com, Network Solutions, and Register.com.',
	},
	{
		id: 5,
		link: 'https://www.web.com/',
		name: 'Web.com Project Gallery',
		image: '/web_com_gallery.jpg',
		alt: 'Web.com Screenshot',
		description:
			'Project gallery showing a small sample of many customer websites that we built. The gallery is dynamic and can be updated by the marketing team without needing a developer to make changes.',
	},
	{
		id: 6,
		link: 'https://www.web.com/websites/templates',
		name: 'Web.com Client Template Gallery',
		image: '/web_com_templates.jpg',
		alt: 'Web.com Screenshot',
		description:
			'A large selection of web templates which customers can use to create their new website. The templates are responsive and look great on all devices.',
	},
];

const MobileProject = ({ name, link, image, alt, description }) => {
	return (
		<Card
			sx={{ border: 0 }}
			className='mobileProjectContainer'>
			<CardActionArea>
				<Link
					href={link}
					target='_blank'
					rel='noreferrer'
					title={`Click to open the ${name} project in a new tab`}>
					<CardMedia
						component='img'
						image={image}
						alt={alt}
					/>
				</Link>
				<CardContent>
					<Typography
						variant='h5'
						component='div'>
						{name}
					</Typography>
					<Typography
						variant='body2'
						color='text.secondary'>
						{description}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

const Projects = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<div>
			<Typography
				variant='h2'
				component='h2'>
				My Projects
			</Typography>
			<Typography
				variant='body1'
				component='p'
				className='lead'>
				These are some of the things that I have worked on in the recent past.
			</Typography>
			<Divider className='horizontal-divider' />

			<Stack
				spacing={2}
				className='projects'>
				<div className='sliderContainer'>
					<Slider {...settings}>
						{projectsArray.map((item) => (
							<div key={item.id}>
								<a
									href={item.link}
									title={`Click to open the ${item.name} project in a new tab`}
									rel='noreferrer'
									target='_blank'>
									<img
										src={item.image}
										alt={item.alt}
										className='sliderImg'
									/>
								</a>
								<Typography
									variant='h5'
									component='h5'>
									{item.name}
								</Typography>
								<Typography
									variant='body2'
									color='text.secondary'
									className='description'>
									{item.description}
								</Typography>
							</div>
						))}
					</Slider>
				</div>

				<div className='mobileGallery'>
					{projectsArray.map((link, index) => (
						<MobileProject
							key={index}
							{...link}
						/>
					))}
				</div>

				<Typography
					variant='h5'
					component='h5'>
					Note
				</Typography>
				<Typography
					variant='body1'
					component='p'
					className='related'>
					These are just a few of the projects that I have worked on, although I
					have many other projects that are not listed here. Since I have spent
					my entire career working on projects for other companies, I do not
					have permission to show the source code. I have worked on everything
					from refactoring legacy monolithic applications to building new
					applications from scratch.
				</Typography>
			</Stack>
		</div>
	);
};

export default Projects;
