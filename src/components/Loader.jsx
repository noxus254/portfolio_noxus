import React from 'react';
import { motion } from 'framer-motion';
import './Loader.css';

const Loader = ({ finishLoading }) => {
  return (
    <div className="loader-container">
      <motion.svg
        className="loader-logo"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <motion.path
          d="M 50, 5
             L 11, 27
             L 11, 72
             L 50, 95
             L 89, 72
             L 89, 27
             L 50, 5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
        />
        <motion.text
            x="50"
            y="65"
            textAnchor="middle"
            fontSize="40"
            fill="currentColor"
            stroke="none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            style={{ fontFamily: 'var(--font-mono)', fontWeight: 'bold' }}
        >
            NTH
        </motion.text>
      </motion.svg>
    </div>
  );
};

export default Loader;
