'use client'
import React from 'react'
import { useEffect, useState } from 'react';
import { getAllBooks } from '@/utils/api';

const BookList = () => {
    const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const booksData = await getAllBooks();
        setBooks(booksData.results); // Use 'results' array from the response
        console.log(booksData);

      } catch (error) {
        console.log(error);
      }
    };

    fetchBooks();
  }, []);
  return (
    <div>
        <div>
        <h1>Book List</h1>
        <ul>
          {books && books.map((book) => (
            <li key={book.id}>
              <h2>{book.title}</h2>
              <p>Author: {book.author}</p>
              <p>Price: ${book.price}</p>
              {/* Add more details as needed */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default BookList