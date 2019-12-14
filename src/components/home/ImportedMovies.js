import React, { Component } from "react";

import { connect } from "react-redux";

import { importTVShow, fetchTVShows } from "../../actions/importsActions";
import MovieRow from "./MovieRow";

export class ImportedMovies extends Component {
  componentDidMount() {
    this.props.fetchTVShows();
  }

  componentDidUpdate(nextProps) {
    this.props.fetchTVShows();
  }

  render() {
    const { imported_shows } = this.props;
    let content = "";
    try {
      content = imported_shows.imported_shows.map((show, index) => (
        <MovieRow key={index} show={show} />
      ));
    } catch {
      //
    }
    return <div className="row">{content}</div>;
  }
}

const mapStateToProps = state => ({
  imported_shows: state.imported_shows
});

export default connect(mapStateToProps, {
  importTVShow,
  fetchTVShows
})(ImportedMovies);
