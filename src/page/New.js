import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import NewTransaction from '../Components/NewTransaction';
import { motion } from 'framer-motion';

const New = () => {
  // useEffect(() => {
  //   axios.get(`${URL}/transactions`).then((response) => {
  //     const totalAmount = response.data.reduce(
  //       (acc, cur) =>
  //         cur.type === 'expense' ? acc - cur.amount : acc + cur.amount,
  //       0
  //     );
  //     setTotal({ totalAmount }).catch(console.log);
  //   });
  // },[]);

  return (
    //navbar tranistions
    <motion.div
      className='New'
      // while
      // Hover={{ scale: 1.2, transition: { duraion: 0.3 } }}
      // whileTap={{ scale: 0.9 }}
      initial={{ opcaity: 0 }}
      animate={{ opcaity: 1 }}
      exit={{ opcaity: 0 }}
      // initial={{width:0}}
      // animate={{width:'100%'}}
      // exit={{x:window.innerWidth, transition:{duration:0.1}}}
    >
      <h2>New</h2>
      <NewTransaction />
    </motion.div>
  );
};

export default New;
