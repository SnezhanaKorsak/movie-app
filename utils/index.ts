import { Movie } from '../types';

export const sortedByRating = (movies: Movie[]) => movies.sort((a, b) => b.rating.imdb - a.rating.imdb);

export const formatMovieName = (movieName: string, limit: number) => {
  return movieName.length > limit ? movieName.slice(0, limit) + '...' : movieName;
};