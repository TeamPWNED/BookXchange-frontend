import React from 'react';
import { categories } from '@/data/categories';
import Image from 'next/image';
import { Col, Row } from 'antd';
import poetry from '@/assets/poetry.png'
const BaseUrl = '/assets/'
const Categories: React.FC = () => {
  console.log();

  return (
  <div className='flex align-center justify-center flex-col p-20 backdrop-blur'>
            <h1 className='text-3xl font-bold text-center mb-10'>BOOK CATEGORIES</h1>
         <div className=' flex gap-10 justify-center flex-wrap'>

        
          {/* grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 */}
{categories && categories.map((category, index) => (
  <div key={index} className='w-fit' >
    <Image
          src={poetry}
          alt={category.name}
          width={150}
          height={100}
          className='rounded-full shadow-sm p-4 '

        />

        <h2 className='text-xl font-bold text-center mt-5'>{category.name}</h2>
  </div>
))}
</div>
</div>
  );
};

export default Categories;