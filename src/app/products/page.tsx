import Search from '@/components/Search.Component';
import ProductComponent from '@/components/Products.Component';
import React, { Suspense } from 'react';
import LoadingData from '@/components/LoadingData.Component';
import DropdownSort from '@/components/product/DropdownSort.Component';

interface SearchParamsType {
  query?: string;
  page?: string;
  sort?: string;
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  return {
    title: 'Product Listing Page',
  };
}

const Products = ({ searchParams }: { searchParams: SearchParamsType }) => {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const sortValue = searchParams?.sort || '';

  return (
    <section className='my-5'>
      <div className='container'>
        <div className='flex justify-end items-center gap-5 mb-5'>
          <Search placeholder='Search product...' />
          {/* <DropdownSort sortValue={sortValue} /> */}
        </div>
        <Suspense key={query + currentPage + sortValue} fallback={<LoadingData />}>
          <ProductComponent query={query} currentPage={currentPage} sortValue={sortValue} />
        </Suspense>
      </div>
    </section>
  );
};

export default Products;
