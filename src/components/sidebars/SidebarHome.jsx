import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Typography from '@mui/material/Box';

import './sidebar.scss';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <span className="photo">
        <img src="/jason.jpeg" alt="Photo of Jason" />
      </span>

      <Typography variant="h2" component="h2" className="intro-name">
        Jason Murphy
      </Typography>
      <Typography variant="body1" component="p" className="email-info">
        <EmailOutlinedIcon className="email-icon" />
        <a href="mailto:jasonbm76@gmail.com" title="Send me an email" className="email-link">
          jasonbm76@gmail.com
        </a>
      </Typography>

      <div className="briefly-container">
        <Typography variant="h6" component="h6" className="briefly">
          Briefly
        </Typography>

        <Typography variant="body1" component="p" className="briefly-content">
          Hey there, my name is Jason and I&apos;m a Senior Software Engineer / Front End Expert. I&apos;m passionate about creating pixel-perfect, beautiful,
          responsive, and accessible websites.
        </Typography>

        <Typography variant="body1" component="p" className="copyright">
          &copy; 2024 Jason Murphy
        </Typography>
      </div>
    </div>
  );
};

export default Sidebar;
