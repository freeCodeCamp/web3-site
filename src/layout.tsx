import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Spacer from './components/helpers/spacer';
import Nav from './components/nav';

const RootLayout = () => {
  return (
    <>
      <Nav />
      <Spacer size={3} />
      <Outlet />
      <Spacer size={3} />
      <ScrollRestoration />
    </>
  );
};

export default RootLayout;
