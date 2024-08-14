import React, { Suspense } from 'react';
import { getProduct } from '@/utils/fetch';
import ProductDetails from '@/components/product/ProductDetails.Component';
import LoadingData from '@/components/LoadingData.Component';
import NavigationBtn from '@/components/product/NavigationBtn.Component';

export async function generateMetadata({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);

  return {
    title: product?.title,
    description: product?.description,
    openGraph: {
      images: product?.thumbnail,
    },
  };
}

const page = async ({ params }: { params: { id: string } }) => {
  const product = await getProduct(params.id);

  return (
    <>
      <section className='my-5'>
        <div className='container'>
          <NavigationBtn title='Go back' type='back' />

          <div className='bg-gray-100 mt-5'>
            <div className='mx-auto px-4 py-8'>
              <Suspense key={params.id} fallback={<LoadingData />}>
                <ProductDetails product={product} />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
