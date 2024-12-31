// import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Application from './pages/Application';
import ApplyJob from './pages/ApplyJob';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/application',
      element: <Application />,
    },
    {
      path: '/apply-job/:id',
      element: <ApplyJob />,
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
