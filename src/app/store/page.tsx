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
        <h1 className='text-3xl font-bold text-center m-10  '>BOOK STORE</h1>
    <div  className='max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 '>
        
        {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
      </div>
   
    <Footer/>
    </>
  )
}

export default Store