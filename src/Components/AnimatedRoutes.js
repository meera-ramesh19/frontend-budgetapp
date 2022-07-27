import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';

// PAGES
import NotFound404 from '../Pages/NotFound404';
import Home from '../Pages/Home';
import Index from '../Pages/Index';
import Chart from '../Pages/Chart';

//This component to define navbar animate tranisitons
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <div>
      <main>
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Home />} />
            <Route path='/transactions' element={<Index />} />
            <Route path='/chart' element={<Chart />} />
            <Route path='*' element={<NotFound404 />} />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default AnimatedRoutes;
