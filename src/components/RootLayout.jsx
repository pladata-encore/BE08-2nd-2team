import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div>
      <Header />
      <main style={{ minHeight: '70vh', padding: '2rem', paddingTop: '80px' }}>
        {/* 페이지 내용 */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
