import axios from 'axios';
import type { FetchMoviesResponse } from '../types/api';

const API_URL = 'https://api.themoviedb.org/3/search/movie';

export const fetchMovies = async (query: string, page: number): Promise<FetchMoviesResponse> => {
  const response = await axios.get<FetchMoviesResponse>(API_URL, {
    params: { query, page },
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    },
  });

  return response.data;
};