import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import PaginationComponent from './Pagination.Component';
import { getProducts } from '@/utils/fetch';

interface ProductPropsType {
  query?: string;
  currentPage: number;
  sortValue?: string;
}

const pageSize = 8;

const ProductComponent = async ({ query, currentPage, sortValue }: ProductPropsType) => {
  const skip = (currentPage - 1) * pageSize;
  const { products, total } = await getProducts(pageSize, skip, query);

  return (
    <>
      {products?.length === 0 ? (
        <div className='bg-red-100 rounded px-7 py-4'>Sorry, no product found.</div>
      ) : (
        <>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
            {products?.map((product: any) => (
              <div className='rounded shadow-sm border border-gray-200 p-3' key={product?.id}>
                <Image
                  src={product.thumbnail}
                  width='220'
                  height='220'
                  alt={product?.title}
                  className='block mx-auto'
                />
                <h1 className='truncate my-2'>{product?.title}</h1>
                <div className=''>
                  <Link
                    className='bg-primary text-white px-4 py-1 rounded inline-block'
                    href={`/products/${product?.id}`}
                  >
                    Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <PaginationComponent total={Number(total)} current={currentPage} />
        </>
      )}
    </>
  );
};

export default ProductComponent;
