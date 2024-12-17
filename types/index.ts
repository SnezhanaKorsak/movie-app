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
  poster: PosterType,
  genres: Array<{name: string}>,
  persons: Person[];
  rating: {
    imdb: number
  },
  movieLength: number;
  similarMovies: SimilarMovie[];
}

export type Person = {
  id: number,
  photo: string,
  name: string,
  enName: string,
  description: string,
  profession: string;
}

export type SimilarMovie = {
  id: number;
  name: string;
  enName: string;
  alternativeName: string;
  type: string;
  poster: PosterType;
  rating: {
    imdb: number
  },
  year: number;
}

export type PosterType = {
  url: string,
  previewUrl: string;
}
