'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

interface NavigationBtnType {
  title: string;
  type: 'back' | 'forward';
}

const NavigationBtn = ({ title, type }: NavigationBtnType) => {
  const router = useRouter();

  const handleBtnClick = () => {
    if (type === 'back') {
      router.back();
    }

    if (type === 'forward') {
      router.forward();
    }
  };

  return (
    <>
      <button
        onClick={handleBtnClick}
        className='bg-primary flex gap-2 capitalize items-center text-white px-6 py-2 rounded-md hover:bg-blue-950 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'
      >
        {title}
      </button>
    </>
  );
};

export default NavigationBtn;
