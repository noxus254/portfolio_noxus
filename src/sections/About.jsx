import React from "react";
import SectionWrapper from "../components/SectionWrapper";
import Reveal from "../components/Reveal";
import ProfileCard from "../components/ProfileCard";
import "./About.css";

const About = () => {
  return (
    <SectionWrapper id="about" className="about-section">
      <Reveal>
        <h2 className="section-title">
          <span className="section-number">01.</span> About Me
        </h2>
      </Reveal>
      <div className="about-content">
        <div className="about-text">
          <Reveal>
            <p>
              Hello! My name is Nguyen Trung Hieu. I am currently a Computer
              Science student at the University of Delhi, India, sponsored by
              the People's Security Academy in Vietnam.
            </p>
          </Reveal>
          <Reveal>
            <p>
              My passion for technology started with curiosity and quickly grew
              into a commitment to building impactful digital solutions. As a
              full-stack developer, I enjoy turning complex ideas into scalable,
              efficient, and human-centered web applications. I'm constantly
              exploring new technologies, improving my problem-solving skills,
              and striving to build systems that are both reliable and
              meaningful.
            </p>
          </Reveal>
        </div>
        <div className="about-card">
          <Reveal>
            <ProfileCard />
          </Reveal>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
