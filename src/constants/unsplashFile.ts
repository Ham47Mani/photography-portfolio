import { createApi } from "unsplash-js";
import { photos } from "unsplash-js/dist/internals";

export const unsplash = createApi({accessKey: process.env.UNSPLASH_ACCESS_KEY!});



export const getPhotosSearch = async (textSearch:string) => {
  const res = await unsplash.photos.getRandom({
    count: 10,
    query: textSearch
  });

  if (res.type === "success") {
    const responseArray = Array.isArray(res.response) ? res.response : [res.response];
    return responseArray.map((photo, i) => ({
      src: photo.urls.full,
      alt: photo.alt_description ?? `${textSearch}-image-${i}`,
      thumb: photo.urls.thumb,
      width: photo.width,
      height: photo.height,
      blur: photo.blur_hash!,
      likes: photo.likes
    }))
  } else {
    console.error('Could not get Ocean Photo');
    return [];
  }
}
