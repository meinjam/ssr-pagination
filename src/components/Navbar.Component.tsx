import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className='bg-primary text-white py-3'>
      <div className='container flex justify-between items-center'>
        <div>
          <Link href='/' prefetch={true} className='text-2xl'>
            Website
          </Link>
        </div>
        <menu className='flex items-center gap-x-10'>
          <li>
            <Link prefetch={true} href='/'>
              Home
            </Link>
          </li>
          <li>
            <Link prefetch={true} href='/products'>
              Products
            </Link>
          </li>
        </menu>
      </div>
    </nav>
  );
};

export default Navbar;
