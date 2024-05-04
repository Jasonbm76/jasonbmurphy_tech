import Typography from '@mui/material/Box';

import './sidebar.scss';

const Sidebar: React.FC = () => {
	return (
		<div className='sidebar'>
			<span className='photo'>
				<img
					src='/jason.jpeg'
					alt='Photo of Jason'
				/>
			</span>

			<Typography
				component='h2'
				className='intro-name'
				sx={{ m: 0, mb: 1, mt: 2 }}>
				Jason Murphy
			</Typography>
			<Typography
				component='h6'
				sx={{ m: 0, mb: 1, mt: 0 }}>
				Frontend Software Engineer
			</Typography>
		</div>
	);
};

export default Sidebar;
