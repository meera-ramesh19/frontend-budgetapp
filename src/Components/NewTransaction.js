import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './NewTransaction.css';
import confetti from 'https://cdn.skypack.dev/canvas-confetti@1';
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
import { spacing } from '@mui/system';
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
        <Box sx={{ width: '100%', pt: 8}}>
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

      {/* <form onSubmit={handleSubmit} >
        <div className='input-elements'>
          <label htmlFor='name'>Item Name:</label>
          <input
            id='name'
            value={transaction.itemName}
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
              value='income'
              checked={transaction.type === 'income'}
              onChange={handleRadioChange}
            />{' '}
            Male
            <input
              type='radio'
              value='expenses'
              checked={transaction.type === 'expenses'}
              onChange={handleRadioChange}
            />{' '}
            Female
          </div>
        </div>
        <div  className='input-elements'>
          <button type='submit'  confettiClick={confettiClick}>Submit</button>
        </div>
  </form>*/}
    </div>
  );
};

export default NewTransaction;

//https://stackoverflow.com/questions/63925910/how-to-use-onchange-with-react-hook-on-react-select-to-change-data-base-on-user

// Putting all of the pieces together, we’ll have the following code:

// import React, { useState } from "react";
// import Grid from "@material-ui/core/Grid";
// import TextField from "@material-ui/core/TextField";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormControl from "@material-ui/core/FormControl";
// import FormLabel from "@material-ui/core/FormLabel";
// import RadioGroup from "@material-ui/core/RadioGroup";
// import Radio from "@material-ui/core/Radio";
// import Select from "@material-ui/core/Select";
// import MenuItem from "@material-ui/core/MenuItem";
// import Slider from "@material-ui/core/Slider";
// import Button from "@material-ui/core/Button";
// const defaultValues = {
//   name: "",
//   age: 0,
//   gender: "",
//   os: "",
//   favoriteNumber: 0,
// };
// const Form = () => {
//   const [formValues, setFormValues] = useState(defaultValues);
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues({
//       ...formValues,
//       [name]: value,
//     });
//   };
//   const handleSliderChange = (name) => (e, value) => {
//     setFormValues({
//       ...formValues,
//       [name]: value,
//     });
//   };
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(formValues);
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <Grid container alignItems="center" justify="center" direction="column">
//         <Grid item>
//           <TextField
//             id="name-input"
//             name="name"
//             label="Name"
//             type="text"
//             value={formValues.name}
//             onChange={handleInputChange}
//           />
//         </Grid>
//         <Grid item>
//           <TextField
//             id="age-input"
//             name="age"
//             label="Age"
//             type="number"
//             value={formValues.age}
//             onChange={handleInputChange}
//           />
//         </Grid>
//         <Grid item>
//           <FormControl>
//             <FormLabel>Gender</FormLabel>
//             <RadioGroup
//               name="gender"
//               value={formValues.gender}
//               onChange={handleInputChange}
//               row
//             >
//               <FormControlLabel
//                 key="male"
//                 value="male"
//                 control={<Radio size="small" />}
//                 label="Male"
//               />
//               <FormControlLabel
//                 key="female"
//                 value="female"
//                 control={<Radio size="small" />}
//                 label="Female"
//               />
//               <FormControlLabel
//                 key="other"
//                 value="other"
//                 control={<Radio size="small" />}
//                 label="Other"
//               />
//             </RadioGroup>
//           </FormControl>
//         </Grid>
//         <Grid item>
//           <FormControl>
//             <Select
//               name="os"
//               value={formValues.os}
//               onChange={handleInputChange}
//             >
//               <MenuItem key="mac" value="mac">
//                 Mac
//               </MenuItem>
//               <MenuItem key="windows" value="windows">
//                 Windows
//               </MenuItem>
//               <MenuItem key="linux " value="linux">
//                 Linux
//               </MenuItem>
//             </Select>
//           </FormControl>
//         </Grid>
//         <Grid item>
//           <div style={{ width: "400px" }}>
//             Favorite Number
//             <Slider
//               value={formValues.favoriteNumber}
//               onChange={handleSliderChange("favoriteNumber")}
//               defaultValue={1}
//               step={1}
//               min={1}
//               max={3}
//               marks={[
//                 {
//                   value: 1,
//                   label: "1",
//                 },
//                 {
//                   value: 2,
//                   label: "2",
//                 },
//                 {
//                   value: 3,
//                   label: "3",
//                 },
//               ]}
//               valueLabelDisplay="off"
//             />
//           </div>
//         </Grid>
//         <Button variant="contained" color="primary" type="submit">
//           Submit
//         </Button>
//       </Grid>
//     </form>
//   );
// };
// export default Form;

//  <TextField
//             variant="outlined"
//             label={}
//             name={name}
//             value={transaction.from}
//             onChange={onChange}
//             {...other}
//             {...(error && {error:true,helperText:error})}
//         />
//        <FormControl fullWidth>
//         <InputLabel id="demo-simple-select-label">Age</InputLabel>
//          <Select
//           labelId="demo-simple-select-label"
//           id="demo-simple-select"
//           value={transaction.category}
//           label="Category"
//           onChange={handleTextChange}
//           >{
//           transaction.map(
//               trans => (
//             <FormControlLabel key={trans.id} value={trans.id} control={<Radio />} label={trans.title} />
//         )
//     )
// }
//    </Select>
// </FormControl>
// <FormControl>
// <Radio
//   checked={selectedValue === 'a'}
//   onChange={handleRadioChange}
//   value="a"
//   name="radio-buttons"
//   inputProps={{ 'aria-label': 'A' }}
// />
// <Radio
//   checked={selectedValue === 'b'}
//   onChange={handleChange}
//   value="b"
//   name="radio-buttons"
//   inputProps={{ 'aria-label': 'B' }}
// /> */}

//   //  </FormControl> */}
