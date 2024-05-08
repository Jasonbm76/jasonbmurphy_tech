import '../../scss/sidebar.scss';

const SidebarResume: React.FC = () => {
	return (
		<div className='sidebar'>
			<div className='resume-body'>
				<a
					href='/jason_murphy_resume.pdf'
					target='_blank'
					rel='noreferrer'
					title='Download PDF version of resume'>
					<img
						src='/resume.png'
						alt='Resume'
						className='resume-img'
					/>
				</a>
			</div>
		</div>
	);
};

export default SidebarResume;
