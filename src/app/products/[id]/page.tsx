import React, { Suspense } from 'react';
import { getProduct } from '@/utils/fetch';
import ProductDetails from '@/components/product/ProductDetails.Component';
import LoadingData from '@/components/LoadingData.Component';

const page = async ({ params }: { params: { id: string } }) => {
  const product = await getProduct(params.id);

  return (
    <section className='my-5'>
      <div className='container'>
        <div className='bg-gray-100'>
          <div className='mx-auto px-4 py-8'>
            <Suspense key={params.id} fallback={<LoadingData />}>
              <ProductDetails product={product} />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
