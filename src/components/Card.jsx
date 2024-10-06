import React from 'react';

export default function Card({ children }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md mx-auto flex flex-col">
      {children}
    </div>
  );
}