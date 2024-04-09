import './header.scss';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Box';

const LinkItem = ({ href, title }) => {
  return (
    <li>
      <motion.a href={href} title={title} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }}>
        {title}
      </motion.a>
    </li>
  );
};

const Spacer = () => {
  return <Box component="span" sx={{ mx: 1 }} />;
};

const Header = () => {
  return (
    <header>
      <div className="logoContainer">
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }}>
          <a href="#" title="Jason Murphy">
            Jason Murphy
          </a>
        </motion.h1>
      </div>
      <div className="topNav">
        <ul>
          <LinkItem href="#" title="About" />
          <Spacer />
          <LinkItem href="#" title="Resume" />
          <Spacer />
          <LinkItem href="#" title="Projects" />
          <Spacer />
          <LinkItem href="#" title="Contact" />
        </ul>
      </div>
    </header>
  );
};

export default Header;
