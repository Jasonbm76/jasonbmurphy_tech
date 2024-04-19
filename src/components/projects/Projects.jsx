import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { Stack } from '@mui/material';

import './projects.scss';

const projectsArray = [
  {
    name: 'Bluehost Homepage',
    image: '/bluehost.jpg',
    alt: 'Bluehost Screenshot',
    description:
      'Bluehost is one of many brands owned by Newfold Digital. This is the front end of the Bluehost website that I worked on. I also spent considerable time working on the customer portal and signup flow for the website.',
  },
  {
    name: 'BlueHost Plan Selection',
    image: '/bluehost2.jpg',
    alt: 'BlueHost Screenshot',
    description:
      'Throughout the website there are many challenging areas where we have to fit a dynamic number of plan tiers with dynamic text into the flow of the website and have it look great on all devices.',
  },
  {
    name: 'HostGator Homepage',
    image: '/hostgator.jpg',
    alt: 'HostGator Screenshot',
    description:
      'Throughout the website there are many challenging areas where we have to fit a dynamic number of plan tiers with dynamic text into the flow of the website and have it look great on all devices.',
  },
];

const Project = ({ name, image, alt, description }) => {
  return (
    <Card sx={{ border: 0 }}>
      <CardActionArea>
        <CardMedia component="img" image={image} alt={alt} />
        <CardContent>
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

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
      <Stack spacing={2} className="projects">
        {projectsArray.map((link, index) => (
          <Project key={index} {...link} />
        ))}
        <Typography variant="h5" component="h5">
          Note
        </Typography>
        <Typography variant="body1" component="p" className="related">
          These are just a few of the projects that I have worked on, although I have many other projects that are not listed here. Since I have spent my entire
          career working on projects for other companies, I do not have permission to show the source code. I have worked on everything from refactoring legacy
          monolithic applications to building new applications from scratch.
        </Typography>
      </Stack>
    </div>
  );
};

export default Projects;
