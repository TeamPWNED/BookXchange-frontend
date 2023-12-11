import { Header } from '@/components/Header/Header'
import Height100 from '@/components/Header/Height100'
import Footer from '@/components/footer/Footer'
import React from 'react'
import {books} from '@/data/books'
import Book from '@/components/Book/book'
const Store = () => {
  return (
    <>
    <Header />
    <Height100 />
    <div>
        <h1 className='text-3xl font-bold text-center m-10'>BOOK STORE</h1>
        {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </div>
    <Footer/>
    </>
  )
}

export default Store