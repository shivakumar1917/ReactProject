import React from 'react'
import Hero from '../homeSection/Hero';
import HomeAbout from '../homeSection/HomeAbout';
import DestinationHome from '../homeSection/destina/DestinationHome';
import MostPopular from '../homeSection/popular/MostPopular';
import Download from '../homeSection/download/Download';
import Works from '../homeSection/work/Works';
import Gallery from '../homeSection/gallery/Gallery';
function Home() {
  return (
    <div>
        <Hero/>
        <HomeAbout/>
        <DestinationHome/>
        <MostPopular/>
        <Download/>
        <Works/>
        <Gallery/>
      
    </div>
  )
}

export default Home