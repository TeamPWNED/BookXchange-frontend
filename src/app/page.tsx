import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import Image from 'next/image'

export default function Home() {
  return (
   <>
   <Header/>
   <div className='p-10 flex-col items-center justify-center'>
    <p>  I am homepage</p>
    </div>
   <Footer/>
   </>
  )
}
