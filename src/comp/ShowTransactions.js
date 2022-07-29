import moment from 'moment';
import React, { useState, useEffect, Link } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import SingleTransaction from './SingleTransaction';
const API = process.env.REACT_APP_API_URL;

const ShowTransactions = () => {
  const nav = useNavigate();

  const [transactions, setTransactions] = useState([]);
  const [total, setTotal] = useState(0);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then((res) => {
        setTransactions(res.data);
        setTableData(res.data);
        console.log(res.data);
      })
      .catch((e) => console.error('catch', e));
  }, []);
  return (
    <div className='showtransaction'>
      <section>
        <table className='table'>
          <thead>
            <tr>
              <th>Transaction date</th>
              <th>Transaction name</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => {
              return (
                <SingleTransaction
                  key={index}
                  transaction={transaction}
                  index={index}
                />
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default ShowTransactions;
// import React, { useState, useEffect, Link } from 'react';
// import SingleTransaction from './SingleTransaction';
// import { styled } from '@mui/material/styles';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import StyledTableRow from '@mui/material/TableRow';
// import { ColDef, DataGrid } from '@mui/x-data-grid';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import TablePagination from '@mui/material/TablePagination';
// import axios from 'axios';
// import { Paper } from '@mui/material';
// import './TransactionDetails.css';
// import moment from 'moment';

// import { useNavigate } from 'react-router-dom';
// import TotalAmount from './TotalAmount';

// const API = process.env.REACT_APP_API_URL;

// const ShowTransactions = () => {
//   const nav = useNavigate();

//   const [transactions, setTransactions] = useState([]);
//   const [total, setTotal] = useState(0);
//   const [tableData, setTableData] = useState([]);

//   useEffect(() => {
//     axios
//       .get(`${API}/transactions`)
//       .then((res) => {
//         setTransactions(res.data);
//         setTableData(res.data);
//         console.log(res.data);
//       })
//       .catch((e) => console.error('catch', e));
//   }, []);

//   const StyledTableCell = styled(TableCell)(({ theme }) => ({
//     [`&.${tableCellClasses.head}`]: {
//       backgroundColor: theme.palette.common.black,
//       color: theme.palette.common.white,
//     },
//     [`&.${tableCellClasses.body}`]: {
//       fontSize: 14,
//     },
//   }));

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

//   const columns: ColDef[] = [
//     {
//       field: '_id',
//       headerName: 'ID',
//       width: 70,
//     },
//     { field: 'from', headerName: 'From', width: 130 },

//     {
//       field: 'amount',
//       headerName: 'Amount',
//       type: 'number',
//       width: 90,
//       render: (rowData) => (
//         <Link href={`/transactions/${rowData.id}`} target='_blank'>
//           {rowData.id}
//         </Link>
//       ),
//     },
//   ];

//   const [page, setPage] = React.useState(2);
//   const [rowsPerPage, setRowsPerPage] = React.useState(10);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   return (
//     <div className='showtransaction'>
//       <TotalAmount transactions={transactions} />
//       {/* <div style={{ height: 500, width: '100%' }}>
//         <DataGrid
//           columns={columns}
//           rows={tableData.map((item, index) => ({
//             id: index,
//             number: item.number,
//             serial: item.serial,
//           }))}
//           getRowId={(r) => r._id}
//           pageSize={5}
//           rowsPerPageOptions={[5]}
//         />
//       </div> */}
//       {/* {/* <TableContainer sx={{ maxHeight: '300px' }} component={Paper}>
//         <Table stickyHeader aria-label='simple table'>
//           <TableHead>
//             <TableRow>
//               <TableCell>Id</TableCell>
//               <TableCell>Date</TableCell>
//               <TableCell>From</TableCell>
//               <TableCell align='center'>Amount</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {transactions.map((row, idx) => (
//               <TableRow
//                 key={idx}
//                 sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//               >
//                 <TableCell>{Number(idx) + 1}</TableCell>
//                 <TableCell>{moment(row.date).format('L')}</TableCell>
//                 <TableCell colSpan={3}>
//                 <Link to={`/transactions/${idx}`} className="clt-row" key={row.from} />
//                 </TableCell>

//                 <TableCell align='center'>{row.amount}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer> */}

//        <TableContainer>
//         <Table>
//           <TableHead>
//             <StyledTableCell>Date</StyledTableCell>
//             <StyledTableCell>Item Name</StyledTableCell>
//             <StyledTableCell>Amount</StyledTableCell>
//           </TableHead>
//           <TableBody>
//             {transactions.map((transaction, index) =>  (
//                 <SingleTransaction
//                   key={index}
//                   transaction={transaction}
//                   index={index}
//                 />
//             ))}
//           </TableBody>
//         </Table>
//         <TablePagination
//           component='div'
//           count={100}
//           page={page}
//           onPageChange={handleChangePage}
//           rowsPerPage={rowsPerPage}
//           onRowsPerPageChange={handleChangeRowsPerPage}
//         />
//       </TableContainer>

//        {/* <section>

//         <table className='table'>

//           <thead>
//             <tr>
//               <th>Transaction date</th>
//               <th>Transaction name</th>
//               <th>Amount</th>
//             </tr>
//           </thead>
//           <tbody>
//             {transactions.map((transaction, index) => {
//               return (
//                 <SingleTransaction
//                   key={index}
//                   transaction={transaction}
//                   index={index}
//                 />
//               );
//             })}
//           </tbody>
//         </table>
//       </section>  */}
//     </div>
//   );
// };

// export default ShowTransactions;
