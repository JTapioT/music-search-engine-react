
export interface Song {
  id: number,
  title: string,
  artist: {
    name: string,
    picture_medium: string,
  }
  album: {
    title: string,
  }
}

export interface Songs {
  data: Song[];
}