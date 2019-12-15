import { IMPORT_TV_SHOW, FETCH_IMPORTED_TV_SHOWS } from "./types";
import axios from "axios";

import { APIKey, TMDBKey } from "../APIKey";

export const importTVShow = data => dispatch => {
   axios
    .post(`http://127.0.0.1:5000/tv_shows/create`, {
      title: data.original_name,
      rating: data.vote_average,
      description: data.overview,
      TMDB_ID: data.id
    })
    .then(function(response) {
      //console.log(response);
    })
    .catch(err => console.log(err));
};

export const fetchTVShows = text => dispatch => {
  axios
    .get(`http://127.0.0.1:5000/tv_shows/`)
    .then(response =>
      dispatch({
        type: FETCH_IMPORTED_TV_SHOWS,
        payload: response.data
      })
    )
    .catch(err => console.log(err));
};

export const deleteTVShow = id => dispatch => {
  axios
    .delete(`http://127.0.0.1:5000/tv_shows/delete/${id}`)
    .then(function(response) {
      console.log(response);
    })
    .catch(err => console.log(err));
};


// export function importTVShow(data) {
//   let url = `http://127.0.0.1:5000/tv_shows/create`;
//   return function (dispatch) { 
//     axios.post(`http://127.0.0.1:5000/tv_shows/create`, {
//       title: data.original_name,
//       rating: data.vote_average,
//       description: data.overview,
//       TMDB_ID: data.id
//     })
//     .then(function(response) {
//       console.log(response);
//     })
//     .catch(err => console.log(err))
//   }
// }