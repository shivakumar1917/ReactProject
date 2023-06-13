import React from 'react';
import HeadTitle from '../../common/headTitle/HeadTitle';
import Card from './Card';
import GalleryData from './GalleryData';
import './Gallery.css'
function Gallery() {
  return (
    <div>
        <HeadTitle/>
        <section className='gallery top'>
            <div className='container grid'>
                {GalleryData.map((value) => {
                    return  <Card images={value.img} title={value.title}/>
                })}
             
            </div>
        </section>
    </div>
  )
}

export default Gallery