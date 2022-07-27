import React from 'react';

import axios from 'axios';
import { motion } from 'framer-motion';
import Charts from '../Components/Charts';

// const Charts = () => {
const Chart = () => {
  

  return (
    //navbar tranisitons
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      // initial={{ width: 0 }}
      // animate={{ width: '100%' }}
      // exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      // while
      // Hover={{ scale: 1.2, transition: { duraion: 0.3 } }}
      // whileTap={{ scale: 0.9 }}
    >
      <Charts  />
    </motion.div>
  );
};

export default Chart;
