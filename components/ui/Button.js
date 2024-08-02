import React from 'react';

const Button = ({ children, ...props }) => {
  return (
    <button {...props} className="bg-teal-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-teal-600 transition duration-300">
      {children}
    </button>
  );
};

export default Button;
