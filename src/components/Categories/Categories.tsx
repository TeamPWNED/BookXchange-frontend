import React from 'react';
import { categories } from '@/data/categories';
import Image from 'next/image';
import { Col, Row } from 'antd';
import poetry from '@/assets/poetry.jpg'
const BaseUrl = '/assets/'
const Categories: React.FC = () => {
  console.log();

  return (
  <div className='flex align-center justify-center flex-col p-20'>
            <h1 className='text-3xl font-bold text-center mb-10'>BOOK CATEGORIES</h1>
          <Row className=''>

{categories && categories.map((category, index) => (
  <Col xs={24} lg={4} key={index} className='flex flex-col items-center justify-center'>
    <Image
          src={poetry}
          alt={category.name}
          width={150}
          height={100}
          className='rounded-full shadow-sm p-4 '

        />

        <h2 className='text-xl font-bold text-center mt-5'>{category.name}</h2>
  </Col>
))}


</Row>
</div>
  );
};

export default Categories;