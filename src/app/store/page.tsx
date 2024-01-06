'use client'
import { useEffect, useState } from 'react';
import { Header } from '@/components/Header/Header'
import Height100 from '@/components/Header/Height100'
import Footer from '@/components/footer/Footer'
import React from 'react'
import { getAllBooks } from '@/utils/api';
import Book from '@/components/Book/book';
import { Col, Row } from 'antd';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Store = () => {
  const [books, setBooks] = useState([]);
  const [userSignedIn, setUserSignedIn] = useState(false);

  useEffect(() => {
    const refreshToken = localStorage.getItem('refreshToken');
    if (refreshToken) {
      setUserSignedIn(true)
    }
    else{
    setUserSignedIn(false);
    }
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
    <>
      <Header />
      <Height100 />
      <h1 className='text-3xl font-bold text-center m-10  '>BOOK STORE</h1>

      {userSignedIn ? (
        <Row className='p-20'>
          {books && books.map((book, index) => (
            <Col xs={24} lg={4} key={index}>
              <Book key={index} book={book} />
            </Col>
          ))}
        </Row>
      ) : (
        <div className='text-center m-10 '>
          <p className='text-xl mb-10'>You need to sign in to view the store.</p>

          <Link href="/sign-up">
            <Button variant="red">Sign In</Button>
          </Link>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Store;
