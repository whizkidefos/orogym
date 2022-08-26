import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

import Navbar from './assets/components/Navbar';
import Footer from './assets/components/Footer';
import Home from './assets/pages/Home';
import ExerciseDetail from './assets/pages/ExerciseDetail';

import './App.css';

function App() {
  return (
    <Box width='400px' sx={{ width: { xl: '1488px' } }} m='auto'>
     <h1>App</h1>
     <Navbar />
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/exercise/:id' element={<ExerciseDetail />} />
     </Routes>
     <Footer />
    </Box>
  );
}

export default App;
