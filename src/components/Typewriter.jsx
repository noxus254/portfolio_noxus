import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Typewriter = ({ text, speed = 100, delay = 1000, loop = false }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    if (isDeleting) {
      if (currentIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayText(prev => prev.slice(0, -1));
          setCurrentIndex(prev => prev - 1);
        }, speed / 2);
      } else if (loop) {
        setIsDeleting(false);
      }
    } else {
      if (currentIndex < text.length) {
        timeout = setTimeout(() => {
          setDisplayText(prev => prev + text[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        }, speed);
      } else if (loop) {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, delay);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, text, speed, delay, loop]);

  return (
    <span>
      {displayText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        style={{ display: 'inline-block', marginLeft: '2px', color: 'var(--accent-color)' }}
      >
        |
      </motion.span>
    </span>
  );
};

export default Typewriter;
