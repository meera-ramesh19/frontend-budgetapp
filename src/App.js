// DEPENDENCIES
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import ResponsiveAppBar from './Components/ResponsiveAppBar';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// PAGES
// import Edit from "./Pages/Edit";
// import NotFound404 from "./Pages/NotFound404";
// import Home from "./Pages/Home";
// import Index from "./Pages/Index";
// import New from "./Pages/New";
// import Show from "./Pages/Show";

// COMPONENTS

import AnimatedRoutes from './Components/AnimatedRoutes';
import Footer from './Components/Footer';

// const URL = process.env.REACT_APP_URL;

const App = () => {

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className='App'>
        {/* <NavBar /> */}
        <ResponsiveAppBar />
        
        {/* <TotalAmount amount={amount} /> */}
        <AnimatedRoutes />

        <Footer />
        {/* <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/transactions" element={<Index />} />
            <Route path="/transactions/new" element={<New />} />
            <Route path="/transactions/:index" element={<Show />} />
            <Route path="/transactions/:index/edit" element={<Edit />} />
            <Route path="*" element={<NotFound404 />} />
          </Routes>
        </main> */}
      </div>
    </LocalizationProvider>
  );
};

export default App;
