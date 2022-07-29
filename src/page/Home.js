import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
  // useEffect(() => {
  //   axios.get(`${URL}/transactions`).then((response) => {
  //     const totalAmount = response.data.reduce(
  //       (acc, cur) =>
  //         cur.type === 'expense' ? acc - cur.amount : acc + cur.amount,
  //       0
  //     );
  //     setTotal({ totalAmount })
  //   })
  //   .catch(console.log);
  // });

  return (
    //navbar tranisitons
    <motion.div
      // while
      // Hover={{ scale: 1.2, transition: { duraion: 0.3 } }}
      // whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      // initial={{ width: 0 }}
      // animate={{ width: '100%' }}
      // exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <div
        style={{
          backgroundColor: '#81a984',
          width: '60vw',
          height: '60vh',
          margin: '5rem auto',
        }}
        className='text'
      >
        <h1 className='text'> Budget App</h1>
      </div>
    </motion.div>
  );
};

export default Home;
