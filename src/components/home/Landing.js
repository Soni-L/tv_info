import React, { Component } from "react";

import { connect } from "react-redux";

import SearchForm from "./SearchForm";
import MoviesContainer from "./MoviesContainer";
import ImportedMovies from "./ImportedMovies";

import Spinner from "../layout/Spinner";

export class Landing extends Component {
  render() {
    const { loading } = this.props;
    return (
      <div className="row">
        <div className="col-md-8 col-left" style={{ display: "inline-block" }}>
          <SearchForm />
          {loading ? <Spinner /> : <MoviesContainer />}
        </div>
        <div className="col-md-4 col-right" style={{ display: "inline-block" }}>
          <ImportedMovies />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.movies.loading
});

export default connect(mapStateToProps)(Landing);
