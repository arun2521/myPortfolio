import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <div className="experience_section" id="experience">
      <h2 className="experience_title">👨‍💻 Experience</h2>

      <div className="experience_card">
        <div className="exp_header">
          <h3>Software Engineer @ Novac Technology & Solutions</h3>
          <span className="exp_duration">May 2023 – Present</span>
        </div>

        <div className="exp_tech_stack">
          <span>React.js</span>
          <span>Redux</span>
          <span>Node.js</span>
          <span>Express.js</span>
          <span>MongoDB</span>
        </div>

        <ul className="exp_points">
          <li>
            Developed scalable frontend dashboards using React and Redux for
            insurence clients.
          </li>
          <li>Built and integrated REST APIs using Node.js and Express.</li>
          <li>
            Worked with MongoDB and SQL for structured and unstructured data
            storage.
          </li>
          <li>
            Collaborated with cross-functional teams to deliver production-level
            features on time.
          </li>
        </ul>
      </div>

      {/* Add more experience_card components here if needed */}
    </div>
  );
};

export default Experience;
