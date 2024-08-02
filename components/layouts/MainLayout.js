import React from 'react';
import Navbar from '../Navbar';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-light-blue-100 to-white">
      <Navbar />
      <main className="flex-grow w-full px-4">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
