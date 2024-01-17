'use client';
import Footer from '@/components/footer/Footer'
import { Header } from '@/components/Header/Header'
import WaveContainer from '@/components/wave-container/WaveContainer'
import HeroBanner from '@/components/HeroBanner/HeroBanner';
import Height100 from '@/components/Header/Height100';
import FeaturesGallery from '@/components/FeaturesGallery/FeaturesGallery';
import Categories from '@/components/Categories/Categories';
import "./smallchange.css"

export default function Home() {

  return (
    <>
    <div className="mainbgimg">
      <Header />
      <Height100/>
      <HeroBanner />
      <div className="padding">
      <Categories/>
      </div>
      <div className="blurcolor">
      <FeaturesGallery/>
      </div>
      <WaveContainer />
      <Footer />
      </div>
     
    </>
  );
}
