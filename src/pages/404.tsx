import React from 'react';
import { useLocation } from 'react-router-dom';

type PropsType = {
  path: string;
};

export const FourZeroFour = ({ path }: PropsType) => {
  const location = useLocation();
  return (
    <main className='main'>
      <h1>404</h1>
      <h2>Page not found</h2>
      <p>Unable to navigate to {location.pathname}</p>
    </main>
  );
};
