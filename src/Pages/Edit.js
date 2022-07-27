import TransactionEditForm from '../Components/TransactionEditForm';
import { useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const Edit = () => {
  // useEffect(() => {
  //   axios.get(`${URL}/transactions`).then((response) => {
  //     const totalAmount = response.data.reduce(
  //       (acc, cur) =>
  //         cur.type === 'expense' ? acc - cur.amount : acc + cur.amount,
  //       0
  //     );
  //     setTotal({ totalAmount }).catch(console.log);
  //   });
  // });

  return (
    //navbar tranisition
    <motion.div
      className='New Edit'
      // while
      // Hover={{ scale: 1.2, transition: { duraion: 0.3 } }}
      // whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      //   initial={{ width: 0 }}
      //   animate={{ width: '100%' }}
      //   exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <h2>Edit</h2>
      <TransactionEditForm />
    </motion.div>
  );
};

export default Edit;
