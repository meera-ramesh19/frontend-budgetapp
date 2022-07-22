// DEPENDENCIES
import React from 'react';
import {Routes, Route } from "react-router-dom";

// PAGES
import Edit from "./Pages/Edit";
import NotFound404 from "./Pages/NotFound404";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";

// COMPONENTS
import NavBar from "../../frontend-budgetapp/NavBar";

function App() {
  return (
    <div className="App">
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/transactions" element={<Index />} />
            <Route path="/transactions/new" element={<New />} />
            <Route path="/transactions/:index" element={<Show />} />
            <Route path="/transactions/:index/edit" element={<Edit />} />
            <Route path="*" element={<NotFound404 />} />
          </Routes>
        </main>
    </div>
  );
}

export default App;


