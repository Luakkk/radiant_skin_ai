// components/ui/Header.js
import React from 'react';

const Header = ({ title, subtitle }) => {
  return (
    <header className="text-center mb-8">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      {subtitle && <p className="text-xl text-gray-700">{subtitle}</p>}
    </header>
  );
};

export default Header;
