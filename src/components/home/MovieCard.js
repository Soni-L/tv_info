import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";

import { importTVShow, fetchTVShows } from "../../actions/importsActions";

export class MovieCard extends Component {
  // onSubmit = e => {
  //   e.preventDefault();
  //   this.props.importTVShow(this.props.movie);
  // };

  async onSubmit(e) {
    e.preventDefault();
    await this.props.importTVShow(this.props.movie);
    await this.props.fetchTVShows();
    debugger;
  }

  render() {
    const { movie } = this.props;
    return (
      <div className="col-md-3 mb-5">
        <div className="card card-body bg-dark text-center h-100">
          <img
            className="w-100 mb-2"
            src={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`}
            alt="Movie Cover"
          />
          <h5 className="text-light card-title">
            {movie.name} - {movie.first_air_date}
          </h5>
          <Link className="btn btn-primary" to={"/movie/" + movie.id}>
            Details
            <i className="fas fa-chevron-right" />
          </Link>
          <button
            onClick={this.onSubmit.bind(this)}
            className="btn btn-primary btn-bg mt-3"
          >
            ImportData
          </button>
        </div>
      </div>
    );
  }
}

// export default MovieCard;

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {
  importTVShow,
  fetchTVShows
})(MovieCard);
