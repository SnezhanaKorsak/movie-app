import { Movie } from '../types';

export const sortedByRating = (movies: Movie[]) => movies.sort((a, b) => b.rating.imdb - a.rating.imdb);

export const formatMovieName = (movieName: string, limit: number) => {
  return movieName.length > limit ? movieName.slice(0, limit) + '...' : movieName;
};

export const dateFormat = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };

  return date.toLocaleDateString('ru-Ru', options);
};