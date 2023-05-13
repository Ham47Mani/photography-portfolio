import react, { MutableRefObject } from "react";
import LightGalleryComponent from 'lightgallery/react';
import { StaticImageData } from 'next/image';
import type { LightGallery } from "lightgallery/lightgallery";

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import { Photo } from "@/constants/types";



type LightGalleryComProps = {
  lightboxRef: MutableRefObject<LightGallery | null>,
  photos: Photo[]
}

const LightGalleryCom = ({lightboxRef, photos}: LightGalleryComProps) => {
  return (
    <div>
      <LightGalleryComponent
        onInit={(ref) => {
          if(ref) {
            lightboxRef.current = ref.instance;
          }
        }}
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        dynamic
        dynamicEl={photos.map(photo => ({
          src: photo.src,
          thumb: photo.thumb
        }))}
      />
    </div>
  )
}

export default LightGalleryCom