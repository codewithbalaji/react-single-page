import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Career from './components/Career';
import About from './components/About';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Home></Home>
      <Career></Career>
      <About></About>
      <Contact></Contact>
    </BrowserRouter>
  );
};

export default App;
