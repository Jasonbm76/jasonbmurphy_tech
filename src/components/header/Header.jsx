import './header.scss';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Box';
import React from 'react';
import { Sling as Hamburger } from 'hamburger-react';
import { useState } from 'react';

const Links = ['about', 'resume', 'projects', 'contact'];

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
  const [isOpen, setOpen] = useState(false);

  return (
    <header>
      <div className="logoContainer">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }}>
          <h1>
            <a href="#" title="Jason Murphy">
              Jason Murphy
            </a>
          </h1>
        </motion.div>
      </div>

      <div className="topNav">
        <div className="hamburgerMenu">
          <Hamburger toggled={isOpen} size={20} toggle={setOpen} label="Show Menu" />

          <div className="mobileNavMenu" style={{ display: isOpen ? 'block' : 'none' }}>
            <ul>
              {Links.map((link, index) => (
                <React.Fragment key={`spacer-${index}`}>
                  <LinkItem href={`#${link}`} title={link} key={index} />
                </React.Fragment>
              ))}
            </ul>
          </div>
        </div>
        <ul className="desktopNavMenu">
          {Links.map((link, index) => (
            <React.Fragment key={`spacer-${index}`}>
              <LinkItem href={`#${link}`} title={link} key={index} />
              <Spacer key={`spacer-${index}`} />
            </React.Fragment>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
