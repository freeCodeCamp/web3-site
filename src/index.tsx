import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { coursePaths, courseNames } from './static/courses';

import Home from './pages/home';
import Superblock from './pages/superblock';
import Nav from './components/nav';
import Spacer from './components/helpers/spacer';

import './fonts.css';
import './variables.css';
import './global.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  // @ts-ignore TypeScript is being ridiculous
  throw new Error('Could not find root element');
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />
      <Spacer size={3} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path={coursePaths.web3}
          element={<Superblock superblock={courseNames.web3} />}
        />
        <Route
          path={`${coursePaths.web3}/*`}
          element={<Navigate to={coursePaths.web3} replace />}
        />
        <Route
          path={coursePaths.solana}
          element={<Superblock superblock={courseNames.solana} />}
        />
        <Route
          path={`${coursePaths.solana}/*`}
          element={<Navigate to={coursePaths.solana} replace />}
        />
        <Route
          path={coursePaths.near}
          element={<Superblock superblock={courseNames.near} />}
        />
        <Route
          path={`${coursePaths.near}/*`}
          element={<Navigate to={coursePaths.near} replace />}
        />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
      <Spacer size={3} />
    </BrowserRouter>
  </React.StrictMode>
);
