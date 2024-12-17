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
  persons: PersonDetails[];
  rating: {
    imdb: number
  },
  movieLength: number;
  similarMovies: SimilarMovie[];
}

export type PersonDetails = {
  id: number,
  photo: string,
  name: string,
  enName: string,
  description: string,
  profession: string;
  movies: SimilarMovie[];
  sex: string;
  birthday: string;
  birthPlace: Array<{value: string}>;
  age: number,
  countAwards: number;
  facts: Array<{value: string}>;
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
