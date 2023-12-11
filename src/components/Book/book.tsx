import Image from 'next/image';
import React from 'react';

// Individual Book Component
const Book = ({ book }:any) => {
  const { name, points, description, category, author, genre, image, review, publication, isbn } = book;

  return (
    <div className="flex flex-col gap-3">
      <Image className="book-image" src='/alchemist.jpg' alt={name} width={100} height={100}/>
      <div className="">
        <h2 className='font-bold'>{name}</h2>
        <p><b>Author: </b>{`${author}`}</p>
        <p>{`Category: ${category}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Points: ${points}`}</p>
        <p>{`Review: ${review}`}</p>
        <p>{`Publication Date: ${publication}`}</p>
        <p>{`ISBN: ${isbn}`}</p>
      </div>
    </div>
  );
};
export default Book;
