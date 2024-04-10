import React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Hidden from '@mui/material/Hidden';
import Typography from '@mui/material/Box';

import './projects.scss';

const Projects = () => {
  return (
    <div>
      <Typography variant="h2" component="h2">
        My Projects
      </Typography>
      <Typography variant="body1" component="p" className="lead">
        These are some of the things that I have worked on in the recent past.
      </Typography>
      <Divider className="horizontal-divider" />
      <Typography variant="body1" component="p" className="welcome">
        Put your projects here
      </Typography>
    </div>
  );
};

export default Projects;
