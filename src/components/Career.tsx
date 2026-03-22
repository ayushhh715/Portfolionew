import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in ECE</h4>
                <h5>Indian Institute of Information Technology, Una</h5>
              </div>
              <h3>2022 – 2026</h3>
            </div>
            <p>
              Bachelor of Technology in Electronics and Communication
              Engineering at IIIT Una, Himachal Pradesh. Active technical
              member of the Entrepreneurship & Incubation Cell.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Fullstack Web Developer Intern</h4>
                <h5>InfraWave Solutions</h5>
              </div>
              <h3>Dec 2024 – May 2025</h3>
            </div>
            <p>
              Designed RESTful APIs using Express.js and TypeScript, improving
              data retrieval by 20%. Enhanced 8 interactive UI components with
              React.js. Increased test coverage from 60% to 98% using Jest and
              React Testing Library.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Technical Member, EIC – Website</h4>
                <h5>IIIT Una</h5>
              </div>
              <h3>Oct 2023 – Nov 2025</h3>
            </div>
            <p>
              Spearheaded development of the official E-Summit website,
              guiding a team of 15 members. Streamlined event operations and
              elevated participant experience through user-friendly design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
