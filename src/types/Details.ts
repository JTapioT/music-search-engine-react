export interface SongDetails{
  id: number,
  title: string,
  release_date: string,
  preview: string,

  artist: {
    name: string,
    picture_big: string,
  }
  album: {
    title: string,
  }
}