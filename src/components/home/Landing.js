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
      <div className="container">
        <div className="row">
          <div className="col-md6">
            <SearchForm />
            {loading ? <Spinner /> : <MoviesContainer />}
          </div>
        </div>
        <div className="row">
            <div><ImportedMovies /></div>
          </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.movies.loading
});

export default connect(mapStateToProps)(Landing);
