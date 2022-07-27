import { Link } from 'react-router-dom';
import moment from 'moment';

const Transaction = ({ transaction, index }) => {
  return (
    <tr style={{ border: '1px solid black' }}>
      <td
        style={{ color: 'black', border: '1px solid black', padding: '1rem' }}
      >
        {moment(transaction.date).format('L')}
      </td>
      <td
        style={{
          color: '#03AC13',

          border: '1px solid black',
          padding: '1rem',
        }}
      >
        {/* <Link to={`/transactions/${index}`}>{transaction.itemName}</Link> */}
        <a
          style={{ color: 'black', textDecoration: 'none' }}
          href={`/transactions/${index}`}
        >
          {transaction.from}
        </a>
      </td>
      <td
        style={{
          color: 'black',
          marginAlign: 'right',
          border: '1px solid black',
          padding: '1rem',
        }}
      >{`$${transaction.amount}`}</td>
    </tr>
  );
};

export default Transaction;

// import { Link } from 'react-router-dom';
// import { styled } from '@mui/material/styles';
// import TableRow from '@mui/material/TableRow';
// import StyledTableRow from '@mui/material/TableRow';
// import StyledTableCell from '@mui/material/TableRow';
// import moment from 'moment';

// const Transaction = ({ transaction, index }) => {
//   const StyledTableRow = styled(TableRow)(({ theme }) => ({
//     '&:nth-of-type(odd)': {
//       backgroundColor: 'linear-gradient(to left bottom, #e8c8ca,#e3bbbd)',
//     },
//     '&:nth-of-type(even)': {
//       backgroundColor: 'linear-gradient(to left bottom, #d0d6b5,#b1bb84)',
//     },
//     // hide last border
//     '&:last-child td, &:last-child th': {
//       border: 0,
//     },
//   }));

//   return (
//      <StyledTableRow >
//                   <StyledTableCell>{moment(transaction.date).format('L')}</StyledTableCell>
//                   <StyledTableCell>
//                   <Link to={`/transactions/${index}`}>{transaction.itemName}</Link>
//                     </StyledTableCell>
//                   <StyledTableCell>{transaction.amount}</StyledTableCell>
//       </StyledTableRow>
//     // <tr style={{ border: '1px solid black' }}>
//     //   <td
//     //     style={{ color: 'black', border: '1px solid black', padding: '1rem' }}
//     //   >
//     //     {moment(transaction.date).format('L')}
//     //   </td>
//     //   <td
//     //     style={{
//     //       color: '#03AC13',

//     //       border: '1px solid black',
//     //       padding: '1rem',
//     //     }}
//     //   >
//     //     {/* <Link to={`/transactions/${index}`}>{transaction.itemName}</Link> */}
//     //     <a style={{ color: 'black',textDecoration: 'none', }} href={`/transactions/${index}`}>
//     //       {transaction.from}
//     //     </a>
//     //   </td>
//     //   <td
//     //     style={{
//     //       color: 'black',
//     //       marginAlign: 'right',
//     //       border: '1px solid black',
//     //       padding: '1rem',
//     //     }}
//     //   >{`$${transaction.amount}`}</td>
//     // </tr>
//   );
// };

// export default Transaction;
