export type GetMovieResponse = {
  docs: Movie[],
  total: number;
}
export type Movie = {
  id: number;
  name: string;
  enName: string;
  alternativeName: string;
  year: number;
  description: string,
  poster: {
    url: string,
    previewUrl: string;
  },
  genres: Array<{name: string}>,
  persons: Person[];
  rating: {
    imdb: number
  }
}

export type Person = {
  id: number,
  photo: string,
  enName: string,
  description: string,
}