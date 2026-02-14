import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import Typewriter from '../components/Typewriter';
import './Hero.css';

const Hero = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="hero" className="hero-section">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="hero-content"
      >
        <motion.p variants={fadeInUp} className="hero-greeting">
          Hi, my name is
        </motion.p>
        <motion.h1 variants={fadeInUp} className="hero-name">
          Trung Hieu
        </motion.h1>
        <motion.h2 variants={fadeInUp} className="hero-tagline">
          I build <Typewriter text="things for the web." speed={100} delay={3000} loop={true} />
        </motion.h2>
        <motion.p variants={fadeInUp} className="hero-bio">
          I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.
        </motion.p>
        <motion.div variants={fadeInUp} className="hero-cta">
          <Link to="projects" smooth={true} duration={500} className="cta-button">
            Check out my work!
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
