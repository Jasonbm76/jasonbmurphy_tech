import React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Hidden from '@mui/material/Hidden';
import Typography from '@mui/material/Box';

import './resume.scss';

const Resume = () => {
  return (
    <div>
      <Typography variant="h2" component="h2">
        My Resume
      </Typography>
      <Typography variant="body1" component="p" className="lead">
        This is what I&apos;ve been up to in my career
      </Typography>
      <Divider className="horizontal-divider" />
      <Typography variant="body1" component="p" className="welcome">
        Put your resume here
      </Typography>
    </div>
  );
};

export default Resume;
