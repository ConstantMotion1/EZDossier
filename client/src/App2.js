import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import SignupPage from './pages/Signup';
import SigninPage from './pages/Signin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} exact />
        <Route path='/signup' element={<SignupPage/>} exact />
        <Route path='/signin' element={<SigninPage/>} exact />
      </Routes>
    </Router>
  );
}

export default App;
