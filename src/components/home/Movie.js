import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import {
  setLoading,
  fetchTMDBSeriesById
} from "../../actions/searchActions";

import Spinner from "../layout/Spinner";

export class Movie extends Component {
  componentDidMount() {
    this.props.fetchTMDBSeriesById(this.props.match.params.id);
    this.props.setLoading();
  }
  render() {
    const { loading, movie } = this.props;
    let genres = '';
    try{
      genres = movie.genres.map((val)=>{  
        return val.name;
      }).join();
    }
    catch{
      //
    }

    let movieInfo = (
      <div className="container">
        <div className="row">
          <div className="col-md-4 card card-body">
            <img src={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`} className="thumbnail" alt="Poster" />
          </div>
          <div className="col-md-8">
            <h2 className="mb-4">{movie.original_name}</h2>
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Genres:</strong> {genres}
              </li>
              <li className="list-group-item">
                <strong>First Air Date:</strong> {movie.first_air_date}
              </li>
              {/* <li className="list-group-item">
                <strong>Rated:</strong> {movie.Rated}
              </li>
              <li className="list-group-item">
                <strong>IMDB Rating:</strong> {movie.imdbRating}
              </li> */}
              <li className="list-group-item">
                <strong>Description:</strong>
                <textarea rows="4" cols="50">
                  {movie.overview}
                </textarea>
              </li>
              {/* <li className="list-group-item">
                <strong>Writer:</strong> {movie.Writer}
              </li>
              <li className="list-group-item">
                <strong>Actors:</strong> {movie.Actors}
              </li> */}
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="card card-body bg-dark my-5 text-light">
            <div className="col-md-12">
              <h3>About </h3>
              {/* {movie.Plot}
              <hr />
              <a
                href={'https://www.imdb.com/title/' + movie.imdbID}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View on IMDB
              </a> */}
              <Link to="/" className="btn btn-default text-light">
                Go Back To Search
              </Link>
            </div>
          </div>
        </div>
      </div>
    );

    let content = loading ? <Spinner /> : movieInfo;
    return <div>{content}</div>;
  }
}

const mapStateToProps = state => ({
  loading: state.movies.loading,
  movie: state.movies.movie
});

export default connect(mapStateToProps, {
  setLoading,
  fetchTMDBSeriesById
})(Movie);
