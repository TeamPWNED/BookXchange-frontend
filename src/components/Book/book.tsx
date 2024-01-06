import Image from 'next/image';
import React from 'react';
import logo from '@/assets/logobook.png';
import "./book.css";

interface BookProps {
  book: {
    name: string;
    points: number;
    description: string;
    category: string;
    author: string;
    genre: string;
    image: string; // Assuming image is a URL or base64 string
    review: string;
    publication: string;
    isbn: string;
  };
}
const renderInfo = (label: string, value: any) => {
  return value && <p><b>{label}: </b>{`${value}`}</p>;
};
const Book: React.FC<BookProps> = ({ book }) => {
  const { name, points, description, category, author, genre, image, review, publication, isbn } = book;

  return (
    <div className="flex flex-col gap-3 book-single p-3 m-1 cursor-pointer">
      <Image className="book-image" src={logo} alt={name} width={100} height={100} />
      <div className="">
        <h2 className='font-bold'>{name}</h2>
        {renderInfo('Author', author)}
        {renderInfo('Category', category)}
        {renderInfo('Genre', genre)}
        {renderInfo('Points', points)}
        {renderInfo('Review', review)}
        {renderInfo('Publication Date', publication)}
        {renderInfo('ISBN', isbn)}
      </div>
    </div>
  );
};

export default Book;
