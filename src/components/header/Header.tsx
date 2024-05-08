import React from 'react';
import { useContext, useEffect, useRef, useState } from 'react';

import { motion } from 'framer-motion';
import { isMobile } from 'react-device-detect';
import { Sling as Hamburger } from 'hamburger-react';

import Link from '@mui/material/Link';
import { Box } from '@chakra-ui/react';
import Divider from '@mui/material/Divider';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

import { ThemeContext } from '../../context/ThemeContext';

import '../../scss/header.scss';

const Links = ['about', 'resume', 'projects', 'skills', 'contact'];

const Spacer = () => {
	return <span style={{ marginLeft: 1, marginRight: 1 }} />;
};

const Header: React.FC = () => {
	const { lightTheme, toggleTheme } = useContext(ThemeContext);
	const [isOpen, setOpen] = useState(false);
	const headerRef = useRef(null);

	// Set the theme based on the user's system preferences
	const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
	const defaultColorScheme = darkThemeMq.matches ? 'dark' : 'light';
	const toggleColorScheme = darkThemeMq.matches ? 'light' : 'dark';

	// Set the theme based on the darkTheme state
	useEffect(() => {
		document.documentElement.setAttribute('data-theme', lightTheme ? defaultColorScheme : toggleColorScheme);
	}, [lightTheme]);

	// Hide the header when scrolling down and show it when scrolling up
	useEffect(() => {
		let prevScrollPos = window.scrollY;

		const handleScroll = () => {
			const currScrollPos = window.scrollY;
			const currHeaderElement = headerRef.current as unknown as HTMLElement; // Update type assertion to convert to 'unknown' first

			if (!currHeaderElement) return;

			prevScrollPos > currScrollPos
				? (currHeaderElement.style.transform = 'translateY(0)')
				: (currHeaderElement.style.transform = 'translateY(-200px');

			prevScrollPos = currScrollPos;
		};

		// Only add the scroll event listener if the user is not on a mobile device
		if (!isMobile) {
			window.addEventListener('scroll', handleScroll);
		}

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	// Close the mobile menu when a link is clicked
	const handleClick = () => {
		setOpen(false);
	};

	const LinkItem = ({ href, title }: { href: string; title: string }) => {
		return (
			<motion.li
				whileHover={{
					scale: 1,
					y: -5,
					transition: { duration: 0.5 },
				}}
				whileTap={{ scale: 0.9 }}>
				<a
					href={href}
					title={title}
					onClick={() => handleClick()}>
					{title}
				</a>
			</motion.li>
		);
	};

	return (
		<Box
			position='fixed'
			zIndex='2000'
			top={0}
			left={0}
			right={0}
			translateY={0}
			transitionProperty='transform'
			transitionDuration='.3s'
			transitionTimingFunction='ease-in-out'
			ref={headerRef}>
			<header>
				<div className='logoContainer'>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.5 }}>
						<h1>
							<a
								href='#'
								title='JASON MURPHY'>
								Jason Murphy
							</a>
						</h1>
					</motion.div>
				</div>
				<div className='topNav'>
					<div className='hamburgerMenu'>
						<Hamburger
							toggled={isOpen}
							size={16}
							toggle={setOpen}
							label='Show Menu'
						/>

						<div
							className='mobileNavMenu'
							style={{ display: isOpen ? 'block' : 'none' }}>
							<ul>
								<LinkItem
									href='#'
									title='Home'
								/>
								<Divider component='li' />
								{Links.map((link, index) => (
									<React.Fragment key={`spacer-${index}`}>
										<LinkItem
											href={`#${link}`}
											title={link.toUpperCase()}
											key={index}
										/>
										<Divider component='li' />
									</React.Fragment>
								))}
							</ul>
						</div>
					</div>

					<motion.ul
						className='desktopNavMenu'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.5 }}>
						<motion.li
							whileHover={{
								scale: 1,
								y: -5,
								transition: { duration: 0.5 },
							}}
							whileTap={{ scale: 0.9 }}>
							<Link
								href='#'
								title='HOME'
								className='homeIcon'>
								<HomeOutlinedIcon />
							</Link>
						</motion.li>
						<Spacer />
						{Links.map((link, index) => (
							<React.Fragment key={`spacer-${index}`}>
								<LinkItem
									href={`#${link}`}
									title={link.toUpperCase()}
									key={index}
								/>
								<Spacer key={`spacer-${index}`} />
							</React.Fragment>
						))}
						<Spacer />
						<motion.li
							whileHover={{
								scale: 1,
								y: -5,
								transition: { duration: 0.5 },
							}}
							whileTap={{ scale: 0.9 }}>
							<Link
								href='#'
								title={
									lightTheme
										? `TOGGLE ${toggleColorScheme.toLocaleUpperCase()} MODE`
										: `TOGGLE ${defaultColorScheme.toLocaleUpperCase()} MODE`
								}
								className='themeIcon'
								onClick={toggleTheme}>
								{lightTheme ? <LightModeIcon /> : <DarkModeIcon />}
							</Link>
						</motion.li>
					</motion.ul>
				</div>
			</header>
		</Box>
	);
};

export default Header;
