import React from 'react';
import { FaSpinner } from 'react-icons/fa6';

const LoadingData = () => {
  return (
    <div className='bg-gray-100 rounded py-10 px-5'>
      <div className='flex items-center gap-1 justify-center'>
        <FaSpinner className='animate-spin' />
        <span>Loading data.....</span>
      </div>
    </div>
  );
};

export default LoadingData;
