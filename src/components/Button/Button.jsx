import React from 'react';
import './Button.scss';

import { motion } from 'framer-motion';

export default function Button({ children, onclick, fullwidth, red, outlined }) {
  return (
    <motion.button
      whileHover={{ scale: outlined ? 1 : 1.05 }}
      transition={{ duration: 0.25 }}
      whileTap={{ scale: 0.75 }}
      onClick={onclick}
      className={`button ${fullwidth ? 'fullwidth' : ''} ${outlined ? 'outlined' : ''} ${red ? 'red' : ''}`}
    >
      {children}
    </motion.button>
  );
}
