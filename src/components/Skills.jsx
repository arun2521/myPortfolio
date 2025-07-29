import React from "react";
import "./Skills.css";
import htmlLogo from "../assets/icons8-html-48.png";
import cssLogo from "../assets/icons8-css-48.png";
import jsLogo from "../assets/icons8-javascript-48.png";
import reactLogo from "../assets/icons8-react-100.png";
import reduxLogo from "../assets/icons8-redux-48.png";
import nodeLogo from "../assets/icons8-node-js-48.png";
import expressLogo from "../assets/icons8-express-js-64.png";
import mongoLogo from "../assets/icons8-mongo-db-32.png";
import mongooseLogo from "../assets/icons8-mongoose-48.png";
import sqlLogo from "../assets/icons8-sql-48.png";
import gitLogo from "../assets/icons8-git-48.png";
import jenkinsLogo from "../assets/icons8-jenkins-48.png";

const skills = [
  { name: "HTML", logo: htmlLogo },
  { name: "CSS", logo: cssLogo },
  { name: "JavaScript", logo: jsLogo },
  { name: "React", logo: reactLogo },
  { name: "Redux", logo: reduxLogo },
  { name: "Node.js", logo: nodeLogo },
  { name: "Express.js", logo: expressLogo },
  { name: "MongoDB", logo: mongoLogo },
  { name: "Mongoose", logo: mongooseLogo },
  { name: "SQL", logo: sqlLogo },
  { name: "Git", logo: gitLogo },
  { name: "Jenkins", logo: jenkinsLogo },
];

const Skills = () => {
  return (
    <div className="skills_section" id="skills">
      <h2 className="skills_title">🛠️ Skills</h2>
      <div className="skills_grid">
        {skills.map((skill) => (
          <div key={skill.name} className="skill_card">
            <img src={skill.logo} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
