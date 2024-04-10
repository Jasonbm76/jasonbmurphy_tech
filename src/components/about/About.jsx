import React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Hidden from '@mui/material/Hidden';
import Typography from '@mui/material/Box';

const About = () => {
  return (
    <div>
      <Typography variant="h2" component="h2">
        About Me
      </Typography>
      <Typography variant="body1" component="p" className="lead">
        &rsquo;There&apos;s always room on the extra mile&rsquo;
      </Typography>
      <Divider className="horizontal-divider" />
      <Typography variant="body1" component="p" className="welcome">
        A Senior Software Engineer with over 20 years of experience in designing, implementing, and optimizing micro frontend and API-driven architectures. I am
        a frontend expert and a React.js enthusiast, with hands-on experience in creating modular, scalable, and responsive frontend components using React.js,
        Bootstrap, Material UI, and other frameworks and libraries.
      </Typography>
      <Typography variant="body1" component="p" className="welcome">
        I have a passion for innovation and efficiency, and I enjoy collaborating with cross-functional teams to deliver high-quality solutions that exceed
        client expectations. One of my key achievements is designing and developing a full Design System that streamlines the styling and branding of our web
        applications across products and devices. I am also skilled in building RESTful APIs and integrating backend services, ensuring efficient data flow and
        improved user experience. I am eager to leverage my expertise and contribute to the development of cutting-edge applications in a dynamic and
        growth-oriented environment.
      </Typography>
    </div>
  );
};

export default About;
