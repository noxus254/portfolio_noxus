import React, { useState } from "react";
import SectionWrapper from "../components/SectionWrapper";
import Reveal from "../components/Reveal";
import "./Experience.css";

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const jobs = [
    {
      company: "University of Delhi (India)",
      role: "Bachelor of Computer Science",
      duration: "2024 - 2027",
      points: [
        "Pursuing a Bachelor's degree in Computer Science with focus on software engineering and system design.",
        "Studying core subjects including data structures, algorithms, operating systems, and database systems.",
        "Developing full-stack web applications as part of academic and personal projects.",
        "Collaborating on team-based technical projects and research assignments.",
      ],
    },
    {
      company: "People’s Security Academy (Vietnam)",
      role: "Engineer of Cyber Security",
      duration: "2022 - Present",
      points: [
        "Pursuing a degree in Cyber Security with a strong foundation in network security, cryptography, and system security.",
        "Studied secure software development practices and vulnerability assessment.",
        "Participated in hands-on labs involving penetration testing and security analysis.",
        "Built small-scale web applications with a focus on secure coding principles.",
      ],
    },
  ];

  return (
    <SectionWrapper id="experience" className="experience-section">
      <Reveal>
        <h2 className="section-title">
          <span className="section-number">03.</span> Where I've Studied
        </h2>
      </Reveal>
      <Reveal width="100%">
        <div className="experience-container">
          <div className="tab-list">
            {jobs.map((job, index) => (
              <button
                key={index}
                className={`tab-btn ${activeTab === index ? "active" : ""}`}
                onClick={() => setActiveTab(index)}
              >
                {job.company}
              </button>
            ))}
            <div
              className="tab-highlight"
              style={{ transform: `translateY(${activeTab * 42}px)` }} // 42px is height of tab
            />
          </div>
          <div className="job-content">
            <h3>
              <span className="job-role">{jobs[activeTab].role}</span>
              <span className="job-company"> @ {jobs[activeTab].company}</span>
            </h3>
            <p className="job-duration">{jobs[activeTab].duration}</p>
            <ul className="job-points">
              {jobs[activeTab].points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </SectionWrapper>
  );
};

export default Experience;
