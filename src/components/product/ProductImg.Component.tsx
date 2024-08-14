'use client';

import Image from 'next/image';
import React, { useRef } from 'react';

const ProductImg = ({ images }: { images: string[] }) => {
  const imageRef = useRef(null);

  const handleChangeSrc = (image: string) => {
    console.log(image);
    // imageRef.current.src = image;
  };

  return (
    <div className='w-full md:w-1/2 px-4 mb-8'>
      {/* <img src={images[0]} alt='Product' className='w-full h-auto rounded-lg shadow-md mb-4' ref={imageRef} /> */}
      <div className=''>
        <Image src={images[0]} width={500} height={500} className='inline-block max-w-full' alt='product main image' />
      </div>
      {images.length > 1 && (
        <div className='flex gap-4 py-4 justify-center overflow-x-auto'>
          {images.map((image, i) => (
            <img
              key={i}
              src={image}
              alt={`Thumbnail ${i + 1}`}
              className='size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300'
              onClick={() => handleChangeSrc(image)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductImg;
