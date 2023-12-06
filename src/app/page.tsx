import Footer from '@/components/footer/Footer'
import {Header} from '@/components/Header/Header'
import WaveContainer from '@/components/wave-container/WaveContainer'

export default function Home() {
  return (
   <>
   <Header/>
   <div className='p-100 flex-col items-center justify-center' style={{marginTop:'100px',padding:'50px'}}>
    <p>  I am homepage</p>
    </div>
    <WaveContainer/>
   <Footer/>
   </>
  )
}
