import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AnnexureHome from './components/annexure-home/AnnexureHome';
import CohortContent from './components/ssf/CohortContent';
import Navigation from './components/reusable/Navigation';
import LogIn from './components/reusable/Login';
import SignUp from './components/reusable/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route index element={<AnnexureHome />} />
        <Route path="cohort" element={<CohortContent />} />
        <Route path="login" element={<LogIn />} />
        <Route path="login" element={<LogIn />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
