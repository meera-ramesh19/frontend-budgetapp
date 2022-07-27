import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './NewTransaction.css';
import confetti from 'https://cdn.skypack.dev/canvas-confetti@1';
import {
  TextField,
  FormControl,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Radio,
  Grid,
  Box,
  Stack,
  Button,
  //   Typography,
  //   FormHelperText,
} from '@mui/material';
// import { spacing } from '@mui/system';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
//  import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const API = process.env.REACT_APP_API_URL;

const NewTransaction = (total, setTotal) => {
  const [itemName, setItemName] = useState('');
  const [amount, setAmount] = useState('');
  const [userDate, setUserDate] = useState(null);
  const [from, setFrom] = useState('');
  const [category, setCategory] = useState('');
  const [type, setType] = useState('');

  const navigate = useNavigate();

  const handleRadioChange = (event) => {
    setType(event.target.value);
  };

  const addTransaction = (newTransaction) => {
    axios
      .post(`${API}/transactions`, newTransaction)
      .then(() => {
        navigate('/new');
      })
      .catch((c) => console.error('catch', c));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTransaction = {
      itemName: itemName,
      amount: amount,
      date: userDate,
      from: from,
      category: category,
      type: type,
    };

    addTransaction(newTransaction);
  };

  const onClick = useCallback(() => {
    confetti({
      particleCount: 150,
      spread: 60,
    });
  }, []);

  return (
    <div className='newtransaction'>
      <form onSubmit={handleSubmit}>
        <Box sx={{ width: '100%', pt: 8 }}>
          <Grid
            container
            alignItems='center'
            justify='center'
            direction='column'
            rowSpacing={0}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs>
              <FormControl component='fieldset'>
                <Box sx={{ width: '250px', pb: 2 }}>
                  <Stack spacing={4} sx={{ width: '250px' }}>
                    <TextField
                      size='small'
                      id='itemName'
                      label='itemName'
                      type='text'
                      variant='standard'
                      required
                      value={itemName}
                      onChange={(e) => setItemName(e.target.value)}
                      error={!itemName}
                      // helperText={!itemName?'Required':'Enter ItemName'}
                    />
                  </Stack>
                  {/* </Stack> */}
                </Box>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <FormControl component='fieldset'>
                <Box sx={{ width: '250px', pb: 2, pt: 2 }}>
                  <Stack spacing={4} sx={{ width: '250px' }}>
                    <TextField
                      id='standard-number'
                      label='Amount'
                      type='number'
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant='standard'
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      error={!amount}
                    />
                  </Stack>
                </Box>
              </FormControl>
            </Grid>

            <Grid item xs>
              <FormControl component='fieldset'>
                <Box sx={{ width: '250px', pb: 2, pt: 2 }}>
                  <Stack spacing={4} sx={{ width: '250px' }}>
                    <DatePicker
                      label='Date Picker'
                      renderInput={(params) => <TextField {...params} />}
                      value={userDate}
                      variant='standard'
                      onChange={(newValue) => {
                        setUserDate(newValue);
                      }}
                    />
                  </Stack>
                </Box>
              </FormControl>
            </Grid>

            <Grid item xs>
              <FormControl component='fieldset'>
                <Box sx={{ width: '250px', pb: 2, pt: 2 }}>
                  <Stack spacing={4} sx={{ width: '250px' }}>
                    <TextField
                      size='small'
                      id='from'
                      label='From'
                      type='text'
                      variant='standard'
                      required
                      value={from}
                      onChange={(e) => setFrom(e.target.value)}
                      error={!from}
                      // helperText={!itemName?'Required':'Enter ItemName'}
                    />
                  </Stack>
                </Box>
              </FormControl>
            </Grid>

            <Grid item xs>
              <FormControl component='fieldset'>
                <Box sx={{ width: '250px', pb: 2, pt: 2 }}>
                  <Stack spacing={4} sx={{ width: '250px' }}>
                    <TextField
                      size='small'
                      id='category'
                      label='Category'
                      type='text'
                      variant='standard'
                      required
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      error={!from}
                      // helperText={!itemName?'Required':'Enter ItemName'}
                    />
                  </Stack>
                </Box>
              </FormControl>
            </Grid>
            <Grid item xs>
              <FormControl error>
                <FormLabel id='income-expense-group-label'>
                  Income/Expense Type
                </FormLabel>
                <RadioGroup
                  aria-labelledby='demo-controlled-radio-buttons-group'
                  name='income-expense-group-label'
                  arai-labelby='income-expense-group-label'
                  value={type}
                  onChange={handleRadioChange}
                  row
                >
                  <FormControlLabel
                    value='income'
                    control={<Radio size='medium' />}
                    label='Income'
                  />
                  <FormControlLabel
                    value='expenses'
                    control={<Radio size='medium' />}
                    label='Expenses'
                  />
                </RadioGroup>
                {/* <FormHelperText>Invalid Selection</FormHelperText> */}
              </FormControl>
            </Grid>
          </Grid>
        </Box>
        <Button
          onClick={onClick}
          variant='contained'
          color='primary'
          type='submit'
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default NewTransaction;
