import React from 'react';
import { Link } from 'react-router-dom';
import './TotalAmount.css';
import { useEffect } from 'react';
// import image from '../assets/budget.jpeg';

const TotalAmount = (props) => {
  const { transactions } = props;

  const balance = transactions.reduce(
    (acc, cur) =>
      cur.type === 'expense'
        ? acc - Number(cur.amount)
        : acc + Number(cur.amount),
    0
  );

  return (
    <header className='Header'>
      <div className='nav'>
        <h2> Account Balance:</h2>
        <h2
          style={{
            textalign: 'center',
            color: `${
              balance >= 1000 ? 'green' : balance >= 0 ? 'white' : 'red'
            }`,
          }}
        >
          {`$${balance}`}
        </h2>
      </div>
    </header>
  );
};
export default TotalAmount;
