// DEPENDENCIES
import React from 'react';
// import NavBar from './Components/NavBar'
import ResponsiveAppBar from './Components/ResponsiveAppBar';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

// COMPONENTS

import AnimatedRoutes from './Components/AnimatedRoutes';
import Footer from './Components/Footer';

const App = () => {
  return (
    // <LocalizationProvider dateAdapter={AdapterDateFns}>
    <div className='App'>
      {/* <NavBar/> */}
      <ResponsiveAppBar />
      <AnimatedRoutes />
      <Footer />
    </div>
    // </LocalizationProvider>
  );
};

export default App;
