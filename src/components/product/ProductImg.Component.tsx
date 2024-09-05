'use client';

import Image from 'next/image';
import React, { useState } from 'react';

const ProductImg = ({ images }: { images: string[] }) => {
  const [mainImgSrc, setMainImgSrc] = useState<string>(images[0]);

  const handleChangeSrc = (image: string) => {
    setMainImgSrc(image);
  };

  return (
    <div className='w-full md:w-1/2 px-4 mb-8'>
      <div className=''>
        <Image
          src={mainImgSrc}
          width={500}
          height={500}
          className='block mx-auto'
          alt='product main image'
          placeholder='blur'
          blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN89R8AAtkB6zy+wn8AAAAASUVORK5CYII='
        />
      </div>
      {images.length > 1 && (
        <div className='flex gap-4 py-4 justify-center overflow-x-auto'>
          {images.map((image, i) => (
            <Image
              key={i}
              src={image}
              width={80}
              height={80}
              alt={`Thumbnail ${i + 1}`}
              className='size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300'
              onClick={() => handleChangeSrc(image)}
              placeholder='blur'
              blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN89R8AAtkB6zy+wn8AAAAASUVORK5CYII='
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductImg;
