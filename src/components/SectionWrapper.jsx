import React from 'react';
// import { motion } from 'framer-motion';

const SectionWrapper = ({ children, id, className }) => {
  return (
    <section
      id={id}
      className={className}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
