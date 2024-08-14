import React from 'react';
import ProductImg from '@/components/product/ProductImg.Component';
import { getRandomNumber } from '@/utils/functions';
import { IoCartOutline } from 'react-icons/io5';
import { GoStarFill } from 'react-icons/go';
import { IoMdHeartEmpty } from 'react-icons/io';

const ProductDetails = ({ product }: any) => {
  return (
    <div className='flex flex-wrap -mx-4'>
      {/* Product Images */}
      <ProductImg images={product.images} />
      {/* Product Details */}
      <div className='w-full md:w-1/2 px-4'>
        <h2 className='text-3xl font-bold mb-2'>{product?.title}</h2>
        <p className='text-gray-600 mb-4'>SKU: {product?.sku}</p>
        <div className='mb-4'>
          <span className='text-2xl font-bold mr-2'>{product?.price}</span>
          <span className='text-gray-500 line-through'>
            {(Number(product?.price) + getRandomNumber(5, 10)).toFixed(2)}
          </span>
        </div>
        <div className='flex items-center mb-4 gap-1'>
          {Array.from({ length: Math.round(product.rating) }).map((review, i) => (
            <GoStarFill className='size-5 text-yellow-500' key={i} />
          ))}
          <span className='ml-2 text-gray-600'>
            {product?.rating} ({product?.reviews?.length} reviews)
          </span>
        </div>
        <p className='text-gray-700 mb-6'>{product?.description}</p>
        <div className='mb-6 flex flex-wrap gap-2 items-center'>
          <h3 className='text-lg font-semibold'>Brand:</h3> <p className='text-gray-700'>{product?.brand}</p>
        </div>
        <div className='mb-6'>
          <label htmlFor='quantity' className='block text-sm font-medium text-gray-700 mb-1'>
            Quantity:
          </label>
          <input
            type='number'
            min={1}
            max={product?.stock}
            defaultValue={1}
            className='w-12 text-center rounded-md border-gray-300  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
          />
        </div>
        <div className='flex space-x-4 mb-6'>
          <button className='bg-primary flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-blue-950 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2'>
            <IoCartOutline className='size-6' />
            Add to Cart
          </button>
          <button className='bg-gray-200 flex gap-2 items-center  text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2'>
            <IoMdHeartEmpty className='size-6' />
            Wishlist
          </button>
        </div>
        <div>
          <h3 className='text-lg font-semibold mb-2'>Other Information:</h3>
          <ul className='list-disc list-inside text-gray-700'>
            <li>Category: {product?.category}</li>
            <li>Warranty Information: {product?.warrantyInformation}</li>
            <li>Shipping Information: {product?.shippingInformation}</li>
            <li>Availability Status: {product?.availabilityStatus}</li>
            <li>Return Policy: {product?.returnPolicy}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
