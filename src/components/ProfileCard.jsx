import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi';
import './ProfileCard.css';
import hieuImg from "../assets/hieu.jpg";

const ProfileCard = () => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="profile-card"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="card-content"
      >
        <div className="card-image-wrapper">
            <img 
                src={hieuImg}
                alt="Profile" 
                className="card-avatar"
            />
        </div>
        <h3 className="card-name">Nguyen Trung Hieu</h3>
        <p className="card-role">Full Stack Developer</p>
        
        <div className="card-socials">
             <a href="https://github.com" target="_blank" rel="noreferrer"><FiGithub /></a>
             <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FiLinkedin /></a>
             <a href="https://twitter.com" target="_blank" rel="noreferrer"><FiTwitter /></a>
             <a href="https://instagram.com" target="_blank" rel="noreferrer"><FiInstagram /></a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileCard;
