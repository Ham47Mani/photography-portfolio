"use client";
import React, { Fragment, useRef } from 'react'
import { Photo } from '@/constants/types'
import MasonryLayout from './MasonryLayout';
import LightGalleryCom from './LightGalleryCom';
import Image from 'next/image';
import { LightGallery } from 'lightgallery/lightgallery';

type GalleryProps = {
  photos: Photo[]
}

const Gallery = ({photos}: GalleryProps) => {
  const lightboxRef = useRef<LightGallery | null>(null);
  return (
    <Fragment>
      <MasonryLayout>
        {
          photos.map((photo, i) => (
            <Image src={photo.src} alt={photo.alt} placeholder="blur" blurDataURL={photo.blur} 
              key={i} width={photo.width} height={photo.height}
              onClick={() => { lightboxRef.current?.openGallery(i) }}
              className="hover:opacity-90 cursor-pointer"
            />
          ))
        }
      </MasonryLayout>
      <LightGalleryCom lightboxRef={lightboxRef} photos={photos}/>
    </Fragment>
  )
}

export default Gallery