import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import importsReducer from './importsReducer';

export default combineReducers({
  movies: searchReducer,
  imported_shows : importsReducer,
});
