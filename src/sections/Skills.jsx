import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import Reveal from '../components/Reveal';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaDocker, FaAws } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiPostgresql, SiNextdotjs } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skillsData = [
    { name: 'React', icon: <FaReact /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'Next.js', icon: <SiNextdotjs /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'HTML5', icon: <FaHtml5 /> },
    { name: 'CSS3', icon: <FaCss3Alt /> },
    { name: 'PostgreSQL', icon: <SiPostgresql /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'Docker', icon: <FaDocker /> },
    { name: 'AWS', icon: <FaAws /> },
  ];

  return (
    <SectionWrapper id="skills" className="skills-section">
      <Reveal>
        <h2 className="section-title">
          <span className="section-number">02.</span> Skills
        </h2>
      </Reveal>
      <Reveal width="100%">
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <p className="skill-name">{skill.name}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </SectionWrapper>
  );
};

export default Skills;
