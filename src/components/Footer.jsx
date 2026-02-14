import React from "react";
import { FiGithub, FiInstagram, FiTwitter, FiLinkedin } from "react-icons/fi";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://github.com" target="_blank" rel="noreferrer">
          <FiGithub />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <FiInstagram />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <FiTwitter />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <FiLinkedin />
        </a>
      </div>
      <p className="footer-text">
        <a
          href="https://github.com/bchiang7/v4"
          target="_blank"
          rel="noreferrer"
        >
          Designed
        </a>
        <span className="separator">& Built by</span>
        <span className="hieu"> Nguyen Trung Hieu</span>
      </p>
    </footer>
  );
};

export default Footer;
