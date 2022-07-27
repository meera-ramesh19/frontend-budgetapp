import React from 'react';
import { Link } from 'react-router-dom';
import './TotalAmount.css';
import { useEffect } from 'react';
// import image from '../assets/budget.jpeg';

const TotalAmount = (props) => {
  const { transactions } = props;

  const balance = transactions.reduce(
    (acc, cur) =>
      cur.type === 'expense' ? acc - cur.amount : acc + cur.amount,
    0
  );

  return (
    <header className='Header'>
      <div className='nav'>
        Bank Total Account:
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
        {/*      <button className='btn'>
          <Link className='nav-links' to='/transactions'>
            All
          </Link>
        </button>

        <button className='btn'>
          <Link className='nav-links' to='/transactions/:id'>
            Show
          </Link>
        </button>

        <button className='btn'>
          <Link className='nav-links' to='/transactions/new'>
            New
          </Link>
        </button>

        <button className='btn'>
          <Link className='nav-links' to='/transactions/chart'>
            Chart
          </Link>
        </button>*/}
      </div>
    </header>
  );
};
export default TotalAmount;
