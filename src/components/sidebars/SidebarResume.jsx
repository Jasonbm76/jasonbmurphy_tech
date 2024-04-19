import './sidebar.scss';

const SidebarResume = () => {
  return (
    <div className="sidebar">
      <div className="resume-body">
        <a href="/jason_murphy_resume.pdf" target="_blank" rel="noreferrer" title="Download PDF version of resume">
          <img src="/resume.png" alt="Resume" className="resume-img" />
        </a>
        <p className="resume-body-text">In case you need an offline version of my resume you can download the PDF version by clicking below.</p>
      </div>
    </div>
  );
};

export default SidebarResume;
