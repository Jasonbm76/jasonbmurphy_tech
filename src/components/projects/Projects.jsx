import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { Stack } from '@mui/material';

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
      <Stack spacing={2} className="projects">
        <Card sx={{ border: 0 }}>
          <CardActionArea>
            <CardMedia component="img" image="/bluehost.jpg" alt="Bluehost Screenshot" />
            <CardContent>
              <Typography variant="h5" component="div">
                Bluehost Homepage
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Bluehost is one of many brands owned by Newfold Digital. This is the front end of the Bluehost website that I worked on. I also spent
                considerable time working on the customer portal and signup flow for the website.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ border: 0 }}>
          <CardActionArea>
            <CardMedia component="img" image="/bluehost2.jpg" alt="BlueHost Screenshot" />
            <CardContent>
              <Typography variant="h5" component="div">
                BlueHost Plan Selection
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Throughout the website there are many challenging areas where we have to fit a dynamic number of plan tiers with dynamic text into the flow of
                the website and have it look great on all devices.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ border: 0 }}>
          <CardActionArea>
            <CardMedia component="img" image="/hostgator.jpg" alt="HostGator Screenshot" />
            <CardContent>
              <Typography variant="h5" component="div">
                HostGator Homepage
              </Typography>
              <Typography variant="body2" color="text.secondary">
                The other main brand that I worked on was Hostgator. Hostgator was more challenging as it is known in the industry as more of a fun and playful
                brand and we wanted to keep that up while also making it look more modern and professional.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Typography variant="h5" component="h5">
          Note
        </Typography>
        <Typography variant="body1" component="p" className="related">
          These are just a few of the projects that I have worked on. I have also worked on many other projects that are not listed here. Because I have spent
          my entire career working on projects for other companies, I do not have permission to show the source code. I have worked on everything from
          refactoring legacy monolithic applications to building new applications from scratch.
        </Typography>
      </Stack>
    </div>
  );
};

export default Projects;
