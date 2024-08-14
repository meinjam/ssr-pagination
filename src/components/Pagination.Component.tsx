'use client';

import React from 'react';
import Pagination from 'rc-pagination';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

const PaginationComponent = ({ total, defaultPageSize, disabled, current }: any) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handlePagination = (current: number, pageSize: number) => {
    // console.log(current);
    // console.log(pageSize);

    const params = new URLSearchParams(searchParams);
    params.set('page', String(current));

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <>
      <Pagination
        current={current}
        total={total}
        onChange={handlePagination}
        defaultPageSize={defaultPageSize}
        disabled={disabled}
        showTitle={false}
        prevIcon={<IoIosArrowBack />}
        nextIcon={<IoIosArrowForward />}
      />
    </>
  );
};

export default PaginationComponent;
