import {
  IMPORT_TV_SHOW,
  FETCH_IMPORTED_TV_SHOWS
} from '../actions/types';

const initialState = {
  text: '',
  shows: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case IMPORT_TV_SHOW:
      return {
        ...state,
        shows: action.payload,
      };
      case FETCH_IMPORTED_TV_SHOWS:
      return {
        ...state,
        shows: action.payload,
      };
    default:
      return state;
  }
}
