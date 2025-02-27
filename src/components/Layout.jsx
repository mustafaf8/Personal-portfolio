import React from 'react';
import Navbar from '../components/Navbar';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="pt-20">{children}</main>
    </div>
  );
};

export default Layout;