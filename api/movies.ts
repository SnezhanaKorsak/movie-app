import axios from 'axios';
import { API_KEY, API_URL } from '@env';
import { yearRange } from '../constants';

//endpoints
const trendingMoviesEndpoint = `${API_URL}/movie?page=1&limit=10&type=movie&year=${yearRange}&lists=top250`;
const upcomingMoviesEndpoint = `${API_URL}/movie?page=1&limit=50&type=movie&status=completed`;
const topRatedMoviesEndpoint = `${API_URL}/movie?page=1&limit=50&type=movie&year=${yearRange}&rating.kp=8.5-10`;

const apiCall = async (endpoint: string, params?: any) => {
  const options = {
    method: 'GET',
    url: endpoint,
    params: params || {},
    headers: {
      'accept': 'application/json',
      'X-API-KEY': API_KEY,
    }
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (err) {
    console.log(err);
    return {};
  }
};

export const fetchTrendingMovies = () => {
  return apiCall(trendingMoviesEndpoint);
};

export const fetchUpcomingMovies = () => {
  return apiCall(upcomingMoviesEndpoint);
};

export const fetchTopRatedMovies = () => {
  return apiCall(topRatedMoviesEndpoint);
};

export const fetchMovieDetails = (movieId: number) => {
  const movieDetailsEndpoint = `${API_URL}/movie/${movieId}`;

  return apiCall(movieDetailsEndpoint);
};

export const fetchPersonDetails = (personId: number) => {
  const personDetailsEndpoint = `${API_URL}/person/${personId}`;

  return apiCall(personDetailsEndpoint);
};

export const fetchMovieByName = (movieName: string) => {
  const searchMovieEndpoint = `${API_URL}/movie/search?page=1&limit=10&query=${movieName}`;

  return apiCall(searchMovieEndpoint);
};