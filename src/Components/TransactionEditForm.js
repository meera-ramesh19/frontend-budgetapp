import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container } from '@mui/system';
import {
  TextField,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  Divider,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Radio,
  Grid,
  Box,
  Stack,
  Button,
  Typography,
  FormHelperText,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
const API = process.env.REACT_APP_API_URL;

const TransactionEditForm = (total, setTotal) => {
  let { index } = useParams();
  const navigate = useNavigate();

  const [transaction, setTransaction] = useState({
    item_name: '',
    amount: 0,
    date: '',
    from: '',
    category: '',
    type: '',
  });

  const [itemName, setItemName] = useState('');
  const [amount, setAmount] = useState(0);
  const [userDate, setUserDate] = useState('');
  const [from, setFrom] = useState('');
  const [category, setCategory] = useState('');
  const [type, setType] = useState('');

  useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((res) => {
        setTransaction(res.data);
        setItemName(res.data.itemName);
        setAmount(res.data.amount);
        setUserDate(res.data.userDate);
        setFrom(res.data.From);
        setCategory(...new Set(res.data.map((item) => item.category)));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [index, navigate]);

  const handleRadioChange = (event) => {
    setType(event.target.value);
  };

  //   const handleCheckboxChange = () => {
  //     setTransaction({ ...transaction, isFavorite: !transaction.isFavorite });
  //   };

  let categories = [...new Set(category)];

  const handleSubmit = (event) => {
    event.preventDefault();

    const editTransaction = {
      itemName: itemName,
      amount: amount,
      date: userDate,
      from: from,
      category: category,
      type: type,
    };

    axios
      .put(`${API}/transactions/${index}`, editTransaction)
      .then((res) => {
        navigate(`/transactions/${index}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='Edit'>
      <form onSubmit={handleSubmit}>
        <Box
          component='form'
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete='off'
        >
          <Box sx={{ width: '100%' }}>
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
                  <Box sx={{ width: '250px' }}>
                    <Stack Spacing={4}>
                      <Stack
                        direction='row'
                        spacing={6}
                        divider={<Divider orientation='vertical' flexItem />}
                      >
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
                    </Stack>
                  </Box>
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <FormControl component='fieldset'>
                  <Box sx={{ width: '250px' }}>
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
                  </Box>
                </FormControl>
              </Grid>

              <Grid item xs>
                <FormControl component='fieldset'>
                  <Box sx={{ width: '250px' }}>
                    <Stack spacing={4} sx={{ width: '250px' }}>
                      <DatePicker
                        label='Date Picker'
                        renderInput={(params) => <TextField {...params} />}
                        value={userDate}
                        type='date'
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
                  <TextField
                    size='small'
                    id='from'
                    label='From'
                    type='text'
                    variant='standard'
                    required
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    // error={!from}
                    // helperText={!itemName?'Required':'Enter ItemName'}
                  />
                </FormControl>
              </Grid>

              <Grid item xs>
                <FormControl component='fieldset'>
                  <Box sx={{ width: '250px' }}>
                    <TextField
                      label='Category'
                      select
                      value={category}
                      name='category'
                      type='text'
                      onChange={(e) => setCategory(e.target.value)}
                      fullWidth
                      size='small'
                      variant='standard'
                    ></TextField>
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
                    arai-labelBy='income-expense-group-label'
                    value={type}
                    onChange={handleRadioChange}
                    row
                  >
                    <FormControlLabel
                      value='income'
                      type='radio'
                      control={<Radio size='medium' />}
                      label='Income'
                    />
                    <FormControlLabel
                      value='expenses'
                      type='radio'
                      control={<Radio size='medium' />}
                      label='Expenses'
                    />
                  </RadioGroup>
                  {/* <FormHelperText>Invalid Selection</FormHelperText> */}
                </FormControl>
              </Grid>

              <Button
                // onClick={onClick}
                variant='contained'
                color='primary'
                type='submit'
              >
                Submit
              </Button>
            </Grid>
          </Box>
        </Box>
        {/* <div className='input-elements'>
          <label htmlFor='name'>Item Name:</label>
          <input
            id='name'
            value={itemName}
            type='text'
            onChange={handleTextChange}
            placeholder='itemName'
            required
          />
        </div>
        <div  className='input-elements'>
          <label htmlFor='amount'>Amount:</label>
          <input
            id='amount'
            type='number'
            required
            value={transaction.amount}
            placeholder='Enter an amount'
            onChange={handleTextChange}
          />
        </div>
        <div  className='input-elements'>
          <label htmlFor='from'>From:</label>
          <input
            id='from'
            type='text'
            name='from'
            value={transaction.from}
            placeholder='from'
            onChange={handleTextChange}
          />
        </div>
        <div  className='input-elements'>
          <label htmlFor=''>Category:</label>
          <input
            id='category'
            type='text'
            name='category'
            value={transaction.category}
            placeholder='eg: savings,employment'
            onChange={handleTextChange}
          />
         
  
        </div>
        <div  className='input-elements'>
          <label htmlFor='date'>Date:</label>
          <input
            id='date'
            name='date'
            type='date'
            value={transaction.date}
            onChange={handleTextChange}
            placeholder='Select a date'
          />
        </div>
        <div  className='input-elements'>
          <p>Income/Expense Type</p>
          <div className='radiobtns'>
            <input
              type='radio'
              name='type'
              value='income'
              checked={transaction.type === 'income'}
              onChange={handleRadioChange}
            />{' '}
            Male
            <input
              type='radio'
              name='type'
              value='expenses'
              checked={transaction.type === 'expenses'}
              onChange={handleRadioChange}
            />{' '}
            Female
          </div>
        </div>
        <div  className='input-elements'>
          <input type='submit' />
        </div> */}
      </form>
      <Link to={`/transactions/${index}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
};

export default TransactionEditForm;
