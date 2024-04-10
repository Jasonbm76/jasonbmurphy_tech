import './header.scss';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import React from 'react';
import { Sling as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Divider from '@mui/material/Divider';

const Links = ['about', 'resume', 'projects', 'contact'];

const Spacer = () => {
  return <Box component="span" sx={{ mx: 1 }} />;
};

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(false);
  };

  const LinkItem = ({ href, title }) => {
    return (
      <motion.li
        whileHover={{
          scale: 1,
          y: -5,
          transition: { duration: 0.5 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <a href={href} title={title} onClick={() => handleClick()}>
          {title}
        </a>
      </motion.li>
    );
  };

  return (
    <header>
      <div className="logoContainer">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }}>
          <h1>
            <a href="#" title="JASON MURPHY">
              Jason Murphy
            </a>
          </h1>
        </motion.div>
      </div>

      <div className="topNav">
        <div className="hamburgerMenu">
          <Hamburger toggled={isOpen} size={16} toggle={setOpen} label="Show Menu" />

          <div className="mobileNavMenu" style={{ display: isOpen ? 'block' : 'none' }}>
            <ul>
              <LinkItem href="#" title="Home" />
              <Divider component="li" />
              {Links.map((link, index) => (
                <React.Fragment key={`spacer-${index}`}>
                  <LinkItem href={`#${link}`} title={link.toUpperCase()} key={index} />
                  <Divider component="li" />
                </React.Fragment>
              ))}
            </ul>
          </div>
        </div>

        <motion.ul className="desktopNavMenu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }}>
          <motion.li
            whileHover={{
              scale: 1,
              y: -5,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            <Link href="#" title="Home" className="homeIcon">
              <HomeOutlinedIcon />
            </Link>
          </motion.li>
          <Spacer />
          {Links.map((link, index) => (
            <React.Fragment key={`spacer-${index}`}>
              <LinkItem href={`#${link}`} title={link.toUpperCase()} key={index} />
              <Spacer key={`spacer-${index}`} />
            </React.Fragment>
          ))}
        </motion.ul>
      </div>
    </header>
  );
};

export default Header;
