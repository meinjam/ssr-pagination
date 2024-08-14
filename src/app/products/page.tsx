import Search from '@/components/Search.Component';
import ProductComponent from '@/components/Products.Component';
import React, { Suspense } from 'react';
import LoadingData from '@/components/LoadingData.Component';

interface SearchParamsType {
  query?: string;
  page?: string;
}

const Products = ({ searchParams }: { searchParams: SearchParamsType }) => {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <section className='my-5'>
      <div className='container'>
        <Search placeholder='Search product...' />
        <Suspense key={query + currentPage} fallback={<LoadingData />}>
          <ProductComponent query={query} currentPage={currentPage} />
        </Suspense>
      </div>
    </section>
  );
};

export default Products;
