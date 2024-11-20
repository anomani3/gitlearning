import React from 'react';
import Login from '../components/Login';
import Browse from '../components/Browse';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/browse',
    element: <Browse />,
  },
]);

const Content = () => {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

export default Content;
