import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

import { ExpandMore } from '@mui/icons-material';
import {
  Card,
  CardContent,
  CardHeader,
  Collapse,
  Typography,
  Box,
  Stack,
} from '@mui/material';
import moment from 'moment';
import toast, { Toaster } from 'react-hot-toast';

const API = process.env.REACT_APP_API_URL;

const TransactionDetails = () => {
  const [transaction, setTransaction] = useState([]);
  const [confirmDialog, setConfirmDialog] = useState([]);

  let navigate = useNavigate();
  let { index } = useParams();

  useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((res) => {
        setTransaction(res.data);
      })
      .catch(() => {
        navigate('/index');
      });
  }, [index, navigate]);

  const notify = () => {
    toast.success('🦄 Success!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };
  const handleDelete = () => {
    axios
      .delete(`${API}/transactions/${index}`)
      .then((res) => {
        navigate('/index');
      })
      .catch((error) => {
        console.warn(error);
      });
    notify();
  };

  const [expanded, setExpanded] = useState(false);
  const handleExpand = () => setExpanded(!expanded);

  return (
    <article>
      {/* <div className='transaction-details'> */}
      {/* <h5>{transaction.date}</h5>
      <h5>
        <span>
          <a href={transaction.item_name}>{transaction.item_name}</a>
        </span>{' '}
      </h5>
      <h6>{transaction.amount}</h6>
      <h6>{transaction.from}</h6>
      <h6>{transaction.category}</h6>
      <h6>{transaction.type}</h6>
      </div> */}
      <Stack gap={5}>
        <Card
          style={{
            maxWidth: '600px',
            display: 'block',
            justifyContent: 'center',
            backgroundColor: '#e8c8ca',
          }}
        >
          <Stack spacing={2} alignItems='center'>
            <CardHeader title='Transaction Detail' />
            <CardContent>
              <Typography variant='h5' component='h5'>
                Item name: {transaction.itemName}
              </Typography>
              <Typography variant='h5' component='h5'>
                Date: {`${moment(transaction.date).format('L')}`}
              </Typography>
            </CardContent>

            <ExpandMore onClick={handleExpand} />
            <Collapse in={expanded}>
              <CardContent>
                <Typography variant='h5' component='h6'>
                  Amount:{transaction.amount}
                </Typography>
                <Typography variant='h5' component='h6'>
                  From:{transaction.from}
                </Typography>
                <Typography variant='h5' component='h6'>
                  Category:{transaction.category}
                </Typography>
                <Typography variant='h5' component='h6'>
                  Type:{transaction.type}
                </Typography>
              </CardContent>
            </Collapse>
          </Stack>
        </Card>

        {/* </div> */}

        <Box alignItems='center'>
          <Stack spacing={2} alignItems='center'>
            <div>
              {' '}
              <Link to={`/index`}>
                <button>Back</button>
              </Link>
            </div>
            <div>
              {' '}
              <Link to={`/transactions/${index}/edit`}>
                <button>Edit</button>
              </Link>
            </div>
            <div>
              {' '}
              <button
                onClick={handleDelete(index)}
                // onClick={() => {
                //   setConfirmDialog({
                //       isOpen: true,
                //       title: 'Are you sure to delete this record?',
                //       subTitle: "You can't undo this operation",
                //       onConfirm: () => { handleDelete() }
                //   })}}
              >
                Delete
              </button>
              {/* <Toaster /> */}
            </div>
          </Stack>
        </Box>
      </Stack>
    </article>
  );
};

export default TransactionDetails;
