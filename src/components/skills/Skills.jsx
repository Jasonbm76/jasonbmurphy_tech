import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Box';
import Skillbar from 'react-skillbars';

import './skills.scss';

function Skills() {
  // , color: { bar: '#388e3c' }
  const skills = [
    { type: 'React', level: 80 },
    { type: 'JavaScript', level: 75 },
    { type: 'jQuery', level: 75 },
    { type: 'HTML', level: 90 },
    { type: 'CSS', level: 90 },
    { type: 'UX', level: 85 },
    { type: 'Git', level: 65 },
    { type: 'Python', level: 45 },
    { type: 'PHP', level: 25 },
    { type: 'Perl', level: 15 },
    { type: 'ASP.net', level: 15 },
    { type: 'SQL', level: 15 },
    { type: 'Node.js', level: 55 },
    // {
    //   type: 'Node.js',
    //   level: 50,
    //   color: {
    //     bar: '#515dd5',
    //     title: { text: '#fff', background: '#4855be' },
    //   },
    // },
  ];

  const colors = {
    bar: '#3498db',
    title: {
      text: '#fff',
      background: '#2980b9',
    },
  };

  return (
    <div>
      <Typography variant="h2" component="h2">
        Skills
      </Typography>
      <Typography variant="body1" component="p" className="lead">
        This is kinda silly and fluid but this is how I rate myself on various skills
      </Typography>
      <Divider className="horizontal-divider" />
      <div className="skills">
        <Skillbar skills={skills} colors={colors} />
      </div>
      <Typography variant="h5" component="h5">
        Related Experiences
      </Typography>
      <Typography variant="body1" component="p" className="related">
        MFE (Micro Frontend), Agile, Scrum, Kanban, JIRA, Confluence, Bitbucket, GitHub, Docker, RESTful APIs, Webpack, Babel, ESLint, Prettier, Jest, Cypress,
        Selenium, Jenkins, Figma, Sketch, Adobe XD, Photoshop, Illustrator, InDesign, Premiere Pro, After Effects, Audition, Lightroom, Flash (RIP)
      </Typography>
    </div>
  );
}

export default Skills;
