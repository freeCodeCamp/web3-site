import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/home';
import Superblock from './pages/superblock';
import Nav from './components/nav';

import './fonts.css';
import './variables.css';
import './global.css';
// import './index.css';

// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/web3' element={<Superblock superblock='web3' />} />
        <Route path='/web3/*' element={<Navigate to='/web3' replace />} />
        <Route path='/solana/' element={<Superblock superblock='solana' />} />
        <Route path='/solana/*' element={<Navigate to='/solana' replace />} />
        <Route path='/near/' element={<Superblock superblock='near' />} />
        <Route path='/near/*' element={<Navigate to='/near' replace />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
