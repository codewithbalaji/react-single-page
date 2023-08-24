import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <Home />
      <Navbar />
    </BrowserRouter>
  );
};

export default App;
