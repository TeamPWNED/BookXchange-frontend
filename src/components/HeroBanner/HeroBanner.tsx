'use client'
import NextLink from 'next/link';
import { Button } from '../ui/button';
import HeroImage from '@/assets/heroImage.png';
import Image from 'next/image';

export default function Hero() {

  return (
    
    <div className='flex flex-col md:flex-row justify-center tracking-wider  '>
      <div className='p-20 flex flex-col gap-10 w-9/12  '>
        <h4 className='text-xl'> Elevating Education, Empowering Students</h4>
        <h1 className='font-bold text-5xl'>Make your life easier with BookXchange</h1>
        <p className=' text-justify '>
        BookXchange, where affordability meets community. Join the movement towards a smarter, collaborative future in education, where students help students, reduce costs, and create a sustainable and connected world.
        </p>
        <p>We believe that the age of a book should not determine the knowledge it contains. So, keep learning and sharing</p>
        <div className='flex gap-2 '>

          <NextLink href="/store" passHref>
            <Button variant='red'>
              Visit Book Store  <span> &rarr;</span>
            </Button>
          </NextLink>

          <NextLink href="/contact" passHref>
            <Button variant='outline'>
              Contact <span>&rarr;</span>
            </Button>
          </NextLink>

        </div>
      </div>
    </div>
  );
}
