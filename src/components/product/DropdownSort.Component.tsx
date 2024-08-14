'use client';

import React from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

const DropdownSort = ({ sortValue }: { sortValue: string }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const params = new URLSearchParams(searchParams);

    if (e.target.value) {
      params.set('sort', e.target.value);
    } else {
      params.delete('sort');
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <select
      defaultValue={sortValue}
      className='rounded border bg-inherit border-gray-200 py-[9px] px-2 w-32 text-gray-500 outline-none text-sm placeholder:text-gray-500'
      onChange={handleSelectChange}
    >
      <option value=''>Select type</option>
      <option value='asc'>Asc</option>
      <option value='desc'>Desc</option>
    </select>
  );
};

export default DropdownSort;
