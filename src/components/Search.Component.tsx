'use client';

import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

const Search = ({ placeholder }: { placeholder: string }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set('query', term);
      params.set('page', '1');
    } else {
      params.delete('query');
      params.delete('page');
    }

    replace(`${pathname}?${params.toString()}`);
  }, 500);

  return (
    <div className='flex'>
      <div className='relative'>
        <label htmlFor='search' className='sr-only'>
          Search
        </label>
        <input
          className='block rounded border border-gray-200 py-[9px] outline-none pl-10 text-sm placeholder:text-gray-500'
          placeholder={placeholder}
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          defaultValue={searchParams.get('query')?.toString()}
        />
        <CiSearch className='absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900' />
      </div>
    </div>
  );
};

export default Search;
