import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../components/RootLayout';
import EsgManage from '../pages/EsgManagePage';
import EsgReport from '../pages/EsgReportPage';
import SupportPage from '../pages/SupportPage';
import MainPage from '../pages/MainPage';
import AboutSpc from '../pages/AboutSpc';
import SPCESGPage from '../components/SPCESGPage';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: 'about',
        element: <AboutSpc />,
      },
      {
        path: 'esg/management',
        element: <SPCESGPage />,
      },
      {
        path: 'esg/esgreport',
        element: <EsgReport />,
      },
      {
        path: 'Support',
        element: <SupportPage />,
      },
    ],
  },
]);
