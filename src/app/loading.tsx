import React from 'react';

const loading = () => {
  return (
    <section className='my-10'>
      <div className='container'>
        <div className='animate-pulse'>
          <div className='h-96 w-full bg-slate-100 rounded'></div>
        </div>
      </div>
    </section>
  );
};

export default loading;
