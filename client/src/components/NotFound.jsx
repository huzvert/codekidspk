import React from 'react';
import 'tailwindcss/tailwind.css';

const NoteFound = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-gray-900">
      <h1 className="text-6xl font-bold text-white mb-4">404</h1>
      <p className="text-xl text-gray-400">This page could not be found.</p>
      <style jsx>{`
        .text-6xl {
          font-size: 6rem;
        }
        @media (min-width: 640px) {
          .text-6xl {
            font-size: 8rem;
          }
        }
      `}</style>
    </div>
  );
};

export default NoteFound;
