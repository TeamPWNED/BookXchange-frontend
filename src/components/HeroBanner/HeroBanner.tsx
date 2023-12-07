'use client'
import NextLink from 'next/link';
import { Button } from '../ui/button';
import HeroImage from '@/assets/heroImage.jpg';
import Image from 'next/image';
export default function Hero() {

  return (
    <div className='flex flex-col md:flex-row'>
      <div className='p-20 flex flex-col gap-10'>
        <h4 className='text-lg'> Lorem ipsum dolor sit amet consectetur </h4>
        <h1 className='font-bold text-3xl'>Make your life easier with BookXchnage</h1>
        <p className=''>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, tempora qui. Explicabo voluptate iure ipsum molestias
          repudiandae perspiciatis nostrum praesentium, unde pariatur tempora magni rem. Necessitatibus facilis obcaecati ratione.
        </p>
        <div className='flex gap-2'>

          <NextLink href="#whitepaper" passHref>
            <Button variant='red'>
              Visit Book Store  <span> &rarr;</span>
            </Button>
          </NextLink>

          <NextLink href="#whitepaper" passHref>
            <Button variant='outline'>
              Contact <span>&rarr;</span>
            </Button>
          </NextLink>

        </div>
      </div>
      <Image src={HeroImage} alt='Hero' style={{maxHeight:'350px', minHeight:'200px', width:'auto', padding:'10px'}}/>
    </div>
  );
}
