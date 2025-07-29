import React, { Fragment } from "react";
import "./MiddleBody.css";
import myProfile from "../assets/my_image.jpeg";
import githubLogo from "../assets/github.png";
import linkedinLogo from "../assets/linkedin.png";

const MiddleBody = () => {
  return (
    <Fragment>
      <div className="middle_body_cnt" id="home">
        <div className="profile_img">
          <img src={myProfile} alt="my_profile" />
          <h2>Hi, I'm Arun 👋</h2>
          <h3>Software Engineer</h3>
          <p className="tagline">
            "Building experiences, not just interfaces."
          </p>
          <p>
            Full Stack Web Developer with 2+ years of ongoing experience in
            building scalable web applications. Proficient in React.js, Redux,
            JavaScript, Node.js, Express.js, MongoDB, SQL, HTML, SASS, and CSS.
            Developed multiple real-world projects showcasing strong
            problem-solving and development skills.
          </p>
          <div className="git_linkidin_divs">
            <a
              href="https://github.com/arun2521"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn github"
            >
              <img src={githubLogo} alt="GitHub" />
            </a>
            <a
              href="https://linkedin.com/in/arunsalindra"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn linkedin"
            >
              <img src={linkedinLogo} alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MiddleBody;
