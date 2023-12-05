import React from 'react';

const Spinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-[400px]">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-black border-opacity-50"></div>
    </div>
  );
};

export default Spinner;