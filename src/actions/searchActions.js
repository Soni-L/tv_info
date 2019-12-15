import { SEARCH_MOVIE, FETCH_TMDB_MOVIES,  FETCH_TMDB_MOVIE, LOADING } from './types';
import axios from 'axios';

import { APIKey, TMDBKey } from '../APIKey';

export const searchMovie = text => dispatch => {
  dispatch({
    type: SEARCH_MOVIE,
    payload: text
  });
};

export const fetchTMDBSeries = text => dispatch => {
  axios
    .get(`https://api.themoviedb.org/3/search/tv?query=${text}&api_key=${TMDBKey}&language=en-US&page=1`)
    .then(response =>
      dispatch({
        type: FETCH_TMDB_MOVIES,
        payload: response.data
      })
    )
    .catch(err => console.log(err));
    
};


export const fetchTMDBSeriesById = id => dispatch => {
  axios
    .get(`https://api.themoviedb.org/3/tv/${id}?api_key=${TMDBKey}&language=en-US`)
    .then(response =>
      dispatch({
        type: FETCH_TMDB_MOVIE,
        payload: response.data
      })
    )
    .catch(err => console.log(err));
};

export const setLoading = () => {
  return {
    type: LOADING
  };
};
