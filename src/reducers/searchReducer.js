import {
  SEARCH_MOVIE,
  FETCH_MOVIES,
  FETCH_TMDB_MOVIES,
  FETCH_MOVIE,
  FETCH_TMDB_MOVIE,
  LOADING
} from '../actions/types';

const initialState = {
  text: '',
  movies: [],
  loading: false,
  movie: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCH_MOVIE:
      return {
        ...state,
        text: action.payload,
        loading: false
      };
      case FETCH_TMDB_MOVIES:
      return {
        ...state,
        movies: action.payload,
        loading: false
      };
    case FETCH_TMDB_MOVIE:
      return {
        ...state,
        movie: action.payload,
        loading: false
      };
    case LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
