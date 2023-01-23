import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import router from './router';

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
    <RouterProvider router={router} />
  </React.StrictMode>
);
