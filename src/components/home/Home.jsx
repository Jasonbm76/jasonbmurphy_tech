import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Box';

import './home.scss';

function Home() {
  return (
    <div>
      <Typography variant="h2" component="h2">
        About this site
      </Typography>
      <Typography variant="body1" component="p" className="lead">
        This site was built with React, Material-UI, SASS, and Framer Motion. It is a single-page application with a responsive design and accessible content.
      </Typography>
      <Divider className="horizontal-divider" />
      <Typography variant="body1" component="p" className="welcome">
        Welcome to my website. Here you can learn{' '}
        <a href="#about" title="About Me">
          about me
        </a>
        , view{' '}
        <a href="#resume" title="View My Resume">
          my resume
        </a>
        , see a sample of{' '}
        <a href="#projects" title="View My Projects">
          projects I&apos;ve worked on
        </a>
        , check out{' '}
        <a href="#resume" title="View My Skills">
          my skills
        </a>
        , or{' '}
        <a href="#contact" title="Contact Me">
          contact me
        </a>
        . Feel free to explore the site and reach out if you&apos;d like to.
      </Typography>
      <Typography variant="body1" component="p" className="welcome">
        GitHub source available{' '}
        <a href="https://github.com/Jasonbm76/jasonmurphy_tech" title="View my Github link" target="_blank" rel="noreferrer">
          here
        </a>
        .
      </Typography>
    </div>
  );
}

export default Home;
