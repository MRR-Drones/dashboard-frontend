import React from 'react';
import './Button.scss';
import { motion } from 'framer-motion';

export default function Button(props) {
  const { children, onclick } = props;
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.25 }}
      whileTap={{ scale: 0.75 }}
      onClick={onclick}
      className={`button ${props.fullwidth ? 'fullwidth' : ''} ${props.red ? 'red' : ''}`}
    >
      {children}
    </motion.button>
  );
}
