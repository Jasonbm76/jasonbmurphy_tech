import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Box';

import './resume.scss';

const Resume = () => {
  return (
    <div>
      <Typography variant="h2" component="h2">
        Resume
      </Typography>
      <Typography variant="body1" component="p" className="lead">
        This is what I&apos;ve been up to in my career
      </Typography>

      <Divider className="horizontal-divider" />

      <Grid container className="resume-container">
        <Grid item xs={12} className="resume-content-middle">
          <Typography variant="h4" component="h4">
            Experience
          </Typography>
        </Grid>

        <Grid container className="resume-job">
          <Grid item xs={2} className="resume-content-left">
            <img src="/newfold_logo.jpeg" alt="Newfold Digital" className="logo" />
          </Grid>
          <Grid item xs={10} className="resume-content-right">
            <Typography variant="h5" component="h5">
              Newfold Digital - Senior Software Engineer
            </Typography>
            <Typography variant="h6" component="h6">
              Feb 2016 - December 2023
            </Typography>
            <Typography variant="body1" component="p" className="resume-company-summary">
              Newfold Digital is a leading web presence solutions provider serving millions of small-to-medium businesses globally. Through their portfolio of
              brands, Bluehost, CrazyDomains, HostGator, Network Solutions, Register.com, Web.com and many others, they help customers of all sizes build a
              digital presence that delivers results and brings value to businesses.
            </Typography>
            <ul className="resume-bullet-points">
              <li>
                Spearheaded the development of micro front end architecture using React.js, facilitating modular and scalable frontend components for enhanced
                maintainability and flexibility.
              </li>
              <li>
                Designed and implemented RESTful APIs to seamlessly integrate backend services with frontend applications, ensuring efficient data flow and
                improved user experience.
              </li>
              <li>
                Collaborated with cross-functional teams to define API contracts and data models, ensuring consistency and interoperability across
                microservices.
              </li>
              <li>
                Worked closely with UI/UX designers to translate wireframes and mockups into responsive and intuitive user interfaces, ensuring a seamless user
                experience across devices.
              </li>
              <li>
                Contributed to the adoption of DevOps practices such as continuous integration, automated testing, and containerization (Docker) to streamline
                deployment workflows and improve release cycles.
              </li>
              <li>Developed and maintained responsive web applications using React.js, Typescript, HTML5, CSS3 (SASS/SCSS).</li>
              <li>
                Responsible for designing and developing existing large scale web projects, including a complete front-end refactor of our customer billing
                portal from registration flow to the customer portal which allowed us to have a mobile presence thereby increasing conversions by more than 5%.
              </li>
              <li>Conducted code reviews and provided constructive feedback to team members.</li>
              <li>Lead and mentored junior developers, fostering a culture of continuous learning and improvement.</li>
            </ul>
          </Grid>
        </Grid>

        <Grid item xs={12} className="resume-divider">
          <Divider />
        </Grid>

        <Grid container className="resume-job">
          <Grid item xs={2} className="resume-content-left">
            <img src="/slbdigital_logo.jpeg" alt="Schlumberger" className="logo" />
          </Grid>
          <Grid item xs={10} className="resume-content-right">
            <Typography variant="h5" component="h5">
              Schlumberger - Senior Web Developer
            </Typography>
            <Typography variant="h6" component="h6">
              Feb 2007 - October 2015
            </Typography>
            <ul className="resume-bullet-points">
              <li>
                Develop and implement creative concepts for interactive media, internal and external presentations, audio/video elements and trade show
                presentations. Responsible for managing, maintaining and updating communications-related libraries as well as preparing and executing electronic
                and/or multimedia campaigns for new technology launches.
              </li>
              <li>Create training videos for deployment on the company intranet site, flash drives and CD/DVD ROM&apos;s.</li>
              <li>Create interactive sales aids and tools to support new technology launches, trade shows, customer events and internal conferences.</li>
              <li>Design and produce materials on CD and DVD and manage vendors to facilitate this process.</li>
            </ul>
          </Grid>
        </Grid>

        <Grid item xs={12} className="resume-divider">
          <Divider />
        </Grid>

        <Grid container className="resume-job">
          <Grid item xs={2} className="resume-content-left">
            <img src="/customervelocity_logo.jpeg" alt="Customer Velocity" className="logo" />
          </Grid>
          <Grid item xs={10} className="resume-content-right">
            <Typography variant="h5" component="h5">
              Customer Velocity - Senior Interactive Programmer
            </Typography>
            <Typography variant="h6" component="h6">
              Dec 2002 - Feb 2007
            </Typography>
            <ul className="resume-bullet-points">
              <li>
                Responsible for the design and programming of our company website and interactive CD’s. Design and programming of 35 client websites in HTML
                with CSS, ASP.NET which have been honored with multiple state and national awards in the home building industry for website design and ease of
                use.
              </li>
              <li>
                Design and programming of Flash presentations as well as graphics for ads, billboards, newspaper, and magazines for National home builders and
                developers like Pulte Homes, ICI Homes, and many more.
              </li>
              <li>
                Numerous projects creating dynamic Flash applications that interact with server-side web pages and XML files to retrieve data from and send data
                to databases. Also responsible for company IT support and creative thinking towards ideas to save the company time and resources.
              </li>
            </ul>
          </Grid>
        </Grid>

        <Grid item xs={12} className="resume-divider">
          <Divider />
        </Grid>

        <Grid container className="resume-job">
          <Grid item xs={2} className="resume-content-left">
            <img src="/us_army_logo.jpeg" alt="US Army" className="logo" />
          </Grid>
          <Grid item xs={10} className="resume-content-right">
            <Typography variant="h5" component="h5">
              US Army - Airborne Ranger &amp; Recruiting and Retention Officer
            </Typography>
            <Typography variant="h6" component="h6">
              Nov 1995 - June 2001
            </Typography>
            <ul className="resume-bullet-points">
              <li>
                Responsible for up to 10 soldiers directly under my command. Achieved a near perfect score in front of a promotion board of senior peers.
                Received numerous awards and decorations totaling 11 for achievements and discipline. Participated in test program for Army recruiting as one of
                the youngest recruiters in the history of the US Army.
              </li>
            </ul>
          </Grid>
        </Grid>

        <Grid item xs={12} className="resume-divider">
          <Divider />
        </Grid>

        <Grid item xs={12} className="resume-content-middle">
          <Typography variant="h4" component="h4">
            Education
          </Typography>
        </Grid>

        <Grid item xs={12} className="resume-content-right education">
          <Typography variant="h5" component="h5">
            The Art Institute of Houston (2012 - 2014)
          </Typography>
          <Typography variant="h6" component="h6">
            Bachelor of Fine Arts (B.F.A.), Graphics &amp; Web Design
          </Typography>
        </Grid>

        <Grid item xs={12} className="resume-content-right education">
          <Typography variant="h5" component="h5">
            The Art Institute of Houston (2001 - 2003)
          </Typography>
          <Typography variant="h6" component="h6">
            Associate of Applied Science (A.A.S.), Interactive Media
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Resume;
