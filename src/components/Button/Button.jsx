import React from 'react';
import './Button.scss';
import { motion } from 'framer-motion';

export default function Button(props) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.25 }}
      whileTap={{ scale: 0.75 }}
      onClick={() => {
        props.onClick();
      }}
      className={`button `}
    >
      {props.children}
    </motion.button>
  );
}
