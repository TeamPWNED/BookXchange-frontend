import Footer from '@/components/footer/Footer'
import { Header } from '@/components/Header/Header'
import WaveContainer from '@/components/wave-container/WaveContainer'
import HeroBanner from '@/components/HeroBanner/HeroBanner';
import Height100 from '@/components/Header/Height100';
import FeaturesGallery from '@/components/FeaturesGallery/FeaturesGallery';

export default function Home() {
  return (
    <>
      <Header />
      <Height100/>
      <HeroBanner />
      <FeaturesGallery/>
      <WaveContainer />
      <Footer />
    </>
  )
}
