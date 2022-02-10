import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 
'react-router-dom';
import Home from './components/pages/Home'
import Herosection from './components/HeroSection'


function App(){
  return(
    <> 
    <Router>
      <Navbar />
      <Herosection/>
      <Routes>
        <Route path = '/' exact component={Home}/>
      </Routes>
    </Router>
    </>
  );

}

export default App 

