import React from 'react';

export const Avatar = ({ children, className }) => (
  <div className={`inline-block h-10 w-10 rounded-full overflow-hidden ${className}`}>
    {children}
  </div>
);

export const AvatarImage = ({ src, alt }) => (
  <img src={src} alt={alt} className="h-full w-full object-cover" />
);

export const AvatarFallback = ({ children }) => (
  <span className="h-full w-full flex items-center justify-center bg-gray-400 text-white">
    {children}
  </span>
);
