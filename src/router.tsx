import React from 'react';
import {
  Route,
  Navigate,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom';

import { coursePaths, courseNames } from './static/courses';

import RootLayout from './layout';
import Home from './pages/home';
import Superblock from './pages/superblock';
import { Alpha } from './pages/alpha';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
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
      <Route path='/alpha/:course' element={<Alpha />} />
      <Route path='*' element={<Navigate to='/' replace />} />
    </Route>
  )
);

export default router;
