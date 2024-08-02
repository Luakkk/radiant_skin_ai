// components/ui/Input.js
import React from 'react';

export function Input({ className, ...props }) {
  return (
    <input
      className={`border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary ${className}`}
      {...props}
    />
  );
}
