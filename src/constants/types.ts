import { createApi } from 'unsplash-js';

export type CreateApi = ReturnType<typeof createApi>;
export type SearchPhotos = CreateApi["search"];
export type GetPhotos = SearchPhotos["getPhotos"];
export type PhotoResponse = Awaited<ReturnType<GetPhotos>>;

export type Photo = {
  src: string,
  alt: string,
  thumb: string,
  blur: string,
  width: number,
  height: number,
  likes: number
}